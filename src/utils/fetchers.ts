import { MACI_CEREMONY_ID, bucketUrl, emptyAverageStats, emptyLiveCeremonyData } from './constants'
import { IAvgStats, ICircuit, ILiveCeremonyData, ITranscript } from './interfaces'
import { Firestore, where } from 'firebase/firestore'
import axios from 'axios'
import {
    formatZkeyIndex,
    convertBytesOrKbToGb,
    initializeFirebaseCoreServices,
    getCeremonyCircuits,
    getDocumentById,
    getCircuitsCollectionPath,
    getContributionsCollectionPath,
    getCircuitContributionsFromContributor,
    queryCollection,
    fromQueryToFirebaseDocumentInfo,
    getParticipantsCollectionPath
} from '@p0tion/actions'
import { getSecondsMinutesHoursFromMillis, timingToString } from './formatting'

let userFirestore: Firestore
(async () => {
    const { firestoreDatabase } = await initializeFirebaseCoreServices(
        process.env.REACT_APP_FIREBASE_API_KEY!,
        process.env.REACT_APP_FIREBASE_AUTH_DOMAIN!,
        process.env.REACT_APP_FIREBASE_PROJECT_ID!,
        process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID!,
        process.env.REACT_APP_FIREBASE_APP_ID!
    )

    userFirestore = firestoreDatabase
})()

/**
 * Get the live ceremony data. 
 * @return <ILiveCeremonyData> - the live ceremony data.
 */
export const getLiveCeremonyData = async (circuitId: string): Promise<ILiveCeremonyData> => {
    const status = await getCeremonyState()
    // if the ceremony is not live then let's return the default ceremony data
    if (!status) return emptyLiveCeremonyData

    // get the circuit doc and its data
    const circuit = await getDocumentById(userFirestore, getCircuitsCollectionPath(MACI_CEREMONY_ID), circuitId)
    const circuitData = circuit.data()
    if (!circuitData) return emptyLiveCeremonyData

    // sequence position and name of the circuit
    const { sequencePosition, name } = circuitData

    // calculate the average contribution time for the circuit
    const contributionTime = await getAvgContributionTime(circuitId)

    // check if we have anyone currently contributing
    const { currentContributor } = circuitData.waitingQueue 

    // if there is no one contributing we return the data that we have so far
    // if there is, we calculate the rest of the values
    if (!!currentContributor) {
        const participantDoc = await getDocumentById(userFirestore, getParticipantsCollectionPath(MACI_CEREMONY_ID), currentContributor)
        const participantData = participantDoc.data()
        if (!participantData) return {
            alive: status,
            circuitSequence: sequencePosition,
            currentContributor: 'None',
            circuitName: name,
            ETA: timingToString(getSecondsMinutesHoursFromMillis(0)),
            timeSpent: timingToString(getSecondsMinutesHoursFromMillis(0)),
            contributionStep: 'N/A'
        }
    
        const { contributionStep, contributionStartedAt } = participantData
    
        const currentTime = new Date().valueOf()
        const endTime = contributionStartedAt + contributionTime

    
        // time left is current time - (when the contribution started + how long it 
        // takes to contribute in average)
        const timeLeft = endTime > currentTime ? endTime - currentTime : 0
        // time spent is current time - when the contribution started
        const timeSpent = currentTime - contributionStartedAt
    
        return {
            alive: status,
            circuitSequence: sequencePosition,
            currentContributor: currentContributor ? currentContributor : 'None',
            circuitName: name,
            ETA: timingToString(getSecondsMinutesHoursFromMillis(timeLeft)),
            timeSpent: timingToString(getSecondsMinutesHoursFromMillis(timeSpent)),
            contributionStep: contributionStep
        }
    } else 
        return {
            alive: status,
            circuitSequence: sequencePosition,
            currentContributor: 'None',
            circuitName: name,
            ETA: timingToString(getSecondsMinutesHoursFromMillis(0)),
            timeSpent: timingToString(getSecondsMinutesHoursFromMillis(0)),
            contributionStep: 'N/A'
        }
}

/**
 * Get all circuits info for a ceremony
 * @returns <ICircuit[]> - all of the circuits in the ceremony.
 */
export const getAllCircuitsInfo = async (): Promise<ICircuit[]> => {
    const circuits = await getCeremonyCircuits(userFirestore, MACI_CEREMONY_ID)
    const circuitInfo: ICircuit[] = []
    // find the info for each circuit
    for (const circuit of circuits) {
        const { id } = circuit
        const { name } = circuit.data
        const waitingQueue = await getUsersInWaitingQueue(id)
        const failedContributions = await getFailedContributions(id)
        const completedContributions = await getCircuitContributions(id)
        const avgContributionTime = await getAvgContributionTime(id)
        const diskSpaceRequired = await getDiskSpaceRequired(id)
        const currentContributor = await getCurrentContributor(id)

        circuitInfo.push({
            id: id,
            name: name,
            waitingQueue: waitingQueue,
            failedContributions: failedContributions,
            completedContributions: completedContributions,
            avgContributionTime: timingToString(getSecondsMinutesHoursFromMillis(avgContributionTime)),
            diskSpaceRequired: diskSpaceRequired,
            currentContributor: currentContributor
        })
    }
    return circuitInfo
}

/**
 * Retrieve the average for all circuits of a ceremony
 * @returns <IAvgStats> - the average stats for all circuits in the ceremony.
 */
export const getAverageData = async (): Promise<IAvgStats> => {
    const circuits = await getCeremonyCircuits(userFirestore, MACI_CEREMONY_ID)

    if (circuits.length === 0)
        return emptyAverageStats

    let totalWaitingQueue = 0
    let totalFailedContributions = 0
    let totalCompletedContributions = 0
    let totalAvgContributionTime = 0
    let totalDiskSpaceRequired = 0

    for (const circuit of circuits) {
        const { id } = circuit
        totalWaitingQueue += await getUsersInWaitingQueue(id)
        totalFailedContributions += await getFailedContributions(id)
        totalCompletedContributions += await getCircuitContributions(id)
        totalAvgContributionTime += await getAvgContributionTime(id)
        totalDiskSpaceRequired += await getDiskSpaceRequired(id)
    }

    let diskSpaceRequired: number = totalDiskSpaceRequired
    let diskSpaceUnit = 'GB'
    if (totalDiskSpaceRequired > 100000) {
        diskSpaceRequired = convertBytesOrKbToGb(totalDiskSpaceRequired, true)
    } else {
        diskSpaceUnit = 'KB'
    }

    const stats: IAvgStats = {
        waitingQueue: Math.round(totalWaitingQueue / circuits.length),
        failedContributions: totalFailedContributions,
        completedContributions: Math.round(totalCompletedContributions / circuits.length),
        avgContributionTime: timingToString(getSecondsMinutesHoursFromMillis(totalAvgContributionTime)),
        diskSpaceRequired: diskSpaceRequired.toString(),
        diskSpaceUnit: diskSpaceUnit
    }

    return stats
}

/**
 * Retrieve the number of users in the waiting queue.
 * @param circuitId <string> - the id of the circuit
 * @returns <Number> - the number of users in the waiting queue.
 */
export const getUsersInWaitingQueue = async (circuitId: string): Promise<number> => {
    const circuit = await getDocumentById(
        userFirestore,
        getCircuitsCollectionPath(MACI_CEREMONY_ID),
        circuitId
    )
    const circuitData = circuit.data()
    if (!circuitData) return 0
    const { waitingQueue } = circuitData
    return waitingQueue.contributors.length ? waitingQueue.contributors.length : 0
}

/**
 * Retrieve the number of users that failed to contribute to a circuit.
 * @param circuitId <string> - the id of the circuit
 * @returns <Number> - the number of users that have failed to contribute to the circuit.
 */
export const getFailedContributions = async (circuitId: string): Promise<number> => {
    const circuit = await getDocumentById(
        userFirestore,
        getCircuitsCollectionPath(MACI_CEREMONY_ID),
        circuitId
    )
    const circuitData = circuit.data()
    if (!circuitData) return 0

    const { waitingQueue } = circuitData
    return waitingQueue.failedContributions
        ? waitingQueue.failedContributions
        : 0
}

/**
 * Retrieve the number of contributions for a specific circuit
 * @param circuitId <string> - the id of the circuit
 * @returns <Number> - the number of users that contributed to the circuit.
 */
export const getCircuitContributions = async (circuitId: string): Promise<number> => {
    const circuit = await getDocumentById(
        userFirestore,
        getCircuitsCollectionPath(MACI_CEREMONY_ID),
        circuitId
    )
    const circuitData = circuit.data()
    if (!circuitData) return 0

    const { waitingQueue } = circuitData
    return waitingQueue.completedContributions
}

/**
 * Retrieve the total number of contributions
 * @returns <Number> - the number of users that contributed to the ceremony.
 */
export const getTotalNumberOfContributions = async (): Promise<number> => {
    const circuits = await getCeremonyCircuits(userFirestore, MACI_CEREMONY_ID)
    let totalContributors = 0
    for (const circuit of circuits) {
        const { waitingQueue } = circuit.data
        totalContributors += waitingQueue.completedContributions
    }
    return totalContributors
}

/**
 * Retrieve how many contributors have contributed to the ceremony (total contributions / circuits length)
 * @returns <Number> - the number of contributors that have contributed to the ceremony.
 */
export const getNumberOfContributors = async (): Promise<number> => {
    const circuits = await getCeremonyCircuits(userFirestore, MACI_CEREMONY_ID)
    const contributions = await getTotalNumberOfContributions()
    return Math.floor(contributions / circuits.length)
}

/**
 * Retrieve the average contribution time
 * @returns <Number> - the avg contribution time.
 */
export const getAvgContributionTime = async (circuitId: string): Promise<number> => {
    const circuit = await getDocumentById(
        userFirestore,
        getCircuitsCollectionPath(MACI_CEREMONY_ID),
        circuitId
    )
    const circuitData = circuit.data()
    if (!circuitData) return 0
    const { avgTimings } = circuitData
    const { contributionComputation, fullContribution, verifyCloudFunction } = avgTimings

    return contributionComputation + fullContribution + verifyCloudFunction
}

/**
 * Retrieve the disk space required for the zKey
 * @returns <Number> - the disk space required.
 */
export const getDiskSpaceRequired = async (circuitId: string): Promise<number> => {
    const circuit = await getDocumentById(
        userFirestore,
        getCircuitsCollectionPath(MACI_CEREMONY_ID),
        circuitId
    )
    const circuitData = circuit.data()
    if (!circuitData) return 0
    const { zKeySizeInBytes } = circuitData

    return zKeySizeInBytes
}

/**
 * Retreive a verification transcript
 * @param identifier - the identifier of the transcript
 * @param byId - whether the identifier is an id or a index
 * @param circuitId - the id of the circuit
 * @returns <string> - the particular verification transcript.
 */
export const getVerificationTranscript = async (
    identifier: string,
    byId: boolean,
    circuitId: string
): Promise<ITranscript[]> => {
    // we keep an array because a coordinator will have 2 transcripts
    const transcripts: ITranscript[] = []
    try {
        // if looking by id, we need to find which zkey has the user contributed to
        if (byId) {
            const contributions = await getCircuitContributionsFromContributor(
                userFirestore,
                MACI_CEREMONY_ID,
                circuitId,
                identifier
            )

            for (const contribution of contributions) {
                const contributionData = contribution.data
                const transcriptStoragePath = contributionData.files.transcriptStoragePath
                const url = `${bucketUrl}/${transcriptStoragePath}`

                const participantDoc = await getDocumentById(
                    userFirestore,
                    getParticipantsCollectionPath(MACI_CEREMONY_ID),
                    identifier
                )
                const participantData = participantDoc.data()
                if (!participantData) return transcripts

                const contributionHash = participantData.contributions
                    .filter((c: any) => c.doc === contribution.id)
                    .at(0).hash

                let content = ''
                const resp = await axios.get(url)
                if (resp.status === 200) content = resp.data

                const transcript: ITranscript = {
                    contributorId: identifier,
                    zKeyIndex: contributionData.zkeyIndex,
                    url: url,
                    content: content,
                    circuitName: contributionData.files.lastZkeyFilename.split('_').at(0),
                    contributionHash: contributionHash
                }

                transcripts.push(transcript)
            }

            return transcripts
        }

        const doc = await queryCollection(
            userFirestore,
            getContributionsCollectionPath(MACI_CEREMONY_ID, circuitId),
            [where('zkeyIndex', '==', identifier)]
        )

        if (!doc) return transcripts

        const contribution = fromQueryToFirebaseDocumentInfo(doc.docs).at(0)!
        const url = `${bucketUrl}/${contribution.data.files.transcriptStoragePath}`

        let content = ''
        const resp = await axios.get(url)
        if (resp.status === 200) content = resp.data

        const participantDoc = await getDocumentById(
            userFirestore,
            getParticipantsCollectionPath(MACI_CEREMONY_ID),
            contribution.data.participantId
        )
        if (!participantDoc) return transcripts
        const participantData = participantDoc.data()
        if (!participantData) return transcripts
        if (participantData.contributions.length === 0) return transcripts

        const contributionHash = participantData.contributions
            .filter((c: any) => c.doc === contribution.id)
            .at(0).hash

        const transcript: ITranscript = {
            contributorId: contribution.data.participantId,
            zKeyIndex: identifier,
            url: url,
            content: content,
            circuitName: contribution.data.files.lastZkeyFilename.split('_').at(0),
            contributionHash: contributionHash
        }

        transcripts.push(transcript)
        return transcripts
    } catch (error: any) {
        return transcripts
    }
}

/**
 * Retrive all the verification transcripts
 * @returns <ITranscript[]> - all the verification transcripts.
 */
export const getAllVerificationTranscripts = async (): Promise<ITranscript[]> => {
    const circuits = await getCeremonyCircuits(userFirestore, MACI_CEREMONY_ID)
    const transcripts: ITranscript[] = []
    // loop through each circuit
    for (const circuit of circuits) {
        const { id } = circuit
        // get how many contributions were made
        // find transcript up to that contribution id
        const completedContributions = await getCircuitContributions(id)
        for (let i = 0; i <= completedContributions; i++) {
            const index = formatZkeyIndex(i)
            const transcript = await getVerificationTranscript(index, false, id)
            transcripts.push(...transcript)
        }
    }

    return transcripts
}

/**
 * Get the current contributor ID for a specific circuit
 * @returns <number> - the current contributor ID.
 */
export const getCurrentContributor = async (circuitId: string): Promise<string> => {
    const circuit = await getDocumentById(
        userFirestore,
        getCircuitsCollectionPath(MACI_CEREMONY_ID),
        circuitId
    )
    const circuitData = circuit.data()
    if (!circuitData) return ''
    const { waitingQueue } = circuitData
    return waitingQueue.contributors.currentContributor
        ? waitingQueue.contributors.currentContributor
        : 'None'
}

/**
 * Check whether the ceremony is active or not
 * @returns <boolean> - whether the ceremony is active or not.
 */
export const getCeremonyState = async (): Promise<boolean> => {
    try {
        const ceremony = await getDocumentById(userFirestore, 'ceremonies', MACI_CEREMONY_ID)
        const ceremonyData = ceremony.data()
        if (!ceremonyData) return false

        if (ceremonyData.state === 'OPENED') return true
        return false
    } catch (error: any) {
        return false
    }
}
