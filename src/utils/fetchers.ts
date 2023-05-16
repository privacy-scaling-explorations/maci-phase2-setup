import { MACI_CEREMONY_ID } from "./constants"
import { getCeremonyCircuits, userFirestore, getDocumentById, getCircuitsCollectionPath } from "./firebase"
import { ICircuit } from "./interfaces"

/**
 * Get all circuits info for a ceremony
 * @returns <ICircuit[]> - all of the circuits in the ceremony.
 */
export const getAllCircuitsInfo = async (): Promise<ICircuit[]> => {
    const circuits = await getCeremonyCircuits(userFirestore, MACI_CEREMONY_ID)
    const circuitInfo: ICircuit[] = []
    for (const circuit of circuits) {
        const { id, name } = circuit
        const waitingQueue = await getUsersInWaitingQueue(id)
        const failedContributions = await getFailedContributions(id)
        const completedContributions = await getCircuitContributors(id)
        const avgContributionTime = await getAvgContributionTime(id)
        const diskSpaceRequired = await getDiskSpaceRequired(id)
        const currentContributor = await getCurrentContributor(id)
        circuitInfo.push({
            id,
            name,
            waitingQueue,
            failedContributions,
            completedContributions,
            avgContributionTime,
            diskSpaceRequired,
            currentContributor
        })
    }
    return circuitInfo
}

/**
 * Retrieve the number of users in the waiting queue.
 * @param circuitId <string> - the id of the circuit
 * @returns <Number> - the number of users in the waiting queue.
 */
export const getUsersInWaitingQueue = async (circuitId: string): Promise<number> => {
    const circuit = await getDocumentById(userFirestore, getCircuitsCollectionPath(MACI_CEREMONY_ID), circuitId)
    const circuitData = circuit.data()
    if (!circuitData) return 0
    const { waitingQueue } = circuitData
    return 0 
}

/**
 * Retrieve the number of users that failed to contribute to a circuit.
 * @param circuitId <string> - the id of the circuit
 * @returns <Number> - the number of users that have failed to contribute to the circuit.
 */
export const getFailedContributions = async (circuitId: string): Promise<number> => {
    const circuit = await getDocumentById(userFirestore, getCircuitsCollectionPath(MACI_CEREMONY_ID), circuitId)
    const circuitData = circuit.data()
    if (!circuitData) return 0

    const { waitingQueue } = circuitData
    return waitingQueue.contributors.failedContributions ? waitingQueue.contributors.failedContributions : 0
}

/**
 * Retrieve the number of contributors for a specific circuit
 * @param circuitId <string> - the id of the circuit
 * @returns <Number> - the number of users that contributed to the circuit.
 */
export const getCircuitContributors = async (circuitId: string): Promise<number> => {
    const circuit = await getDocumentById(userFirestore, getCircuitsCollectionPath(MACI_CEREMONY_ID), circuitId)
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
    let totalContributors: number = 0
    for (const circuit of circuits) {
        const { waitingQueue } = circuit.data 
        totalContributors += waitingQueue.completedContributions
    }
    return totalContributors
}

/**
 * Retrieve the average contribution time
 * @returns <Number> - the avg contribution time.
 */
export const getAvgContributionTime = async (circuitId: string): Promise<number> => {
    const circuit = await getDocumentById(userFirestore, getCircuitsCollectionPath(MACI_CEREMONY_ID), circuitId)
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
    const circuit = await getDocumentById(userFirestore, getCircuitsCollectionPath(MACI_CEREMONY_ID), circuitId)
    const circuitData = circuit.data()
    if (!circuitData) return 0
    const { zKeySizeInBytes } = circuitData

    return zKeySizeInBytes
}

/**
 * Retreive a verification transcript
 * @param identifier - the identifier of the transcript
 * @param byId - whether the identifier is an id or a index
 * @returns <string> - the particular verification transcript.
 */
export const getVerificationTranscript = async (identifier: string, byId: boolean): Promise<string> => {
    return ""
}

/**
 * Get all verification transcripts
 * @returns <string[]> - all of the verification transcripts
 */
export const getAllVerificationTranscripts = async (): Promise<string[]> => {
    return []
}

/**
 * Get the current contributor ID
 * @returns <number> - the current contributor ID.
 */
export const getCurrentContributor = async (circuitId: string): Promise<string> => {
    const circuit = await getDocumentById(userFirestore, getCircuitsCollectionPath(MACI_CEREMONY_ID), circuitId)
    const circuitData = circuit.data()
    if (!circuitData) return ""
    const { waitingQueue } = circuitData
    return waitingQueue.contributors.currentContributor ? waitingQueue.contributors.currentContributor : "None"
}

/**
 * Check whether the ceremony is active or not
 * @returns <boolean> - whether the ceremony is active or not.
 */
export const getCeremonyState = async (): Promise<boolean> => {
    const ceremony = await getDocumentById(userFirestore, "ceremonies", MACI_CEREMONY_ID)
    const ceremonyData = ceremony.data()
    if (!ceremonyData) return false

    if (ceremonyData.state === "OPENED") return true 
    return false 
}

