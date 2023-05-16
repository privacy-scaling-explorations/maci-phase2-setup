import { CeremonyState, commonTerms, getCeremonyCircuits, getCircuitsCollectionPath, getDocumentById } from "@p0tion/actions"
import { MACI_CEREMONY_ID } from "./constants"
import { userFirestore, userFunctions } from "./firebase"

export const getAllCircuits = async () => {
    const circuits = getCeremonyCircuits(userFirestore, MACI_CEREMONY_ID)
    console.log(circuits)
    return circuits
    // return ""
}

/**
 * Retrieve the number of users in the waiting queue.
 * @param circuitId <string> - the id of the circuit
 * @returns <Number> - the number of users in the waiting queue.
 */
export const getUsersInWaitingQueue = async (circuitId: string): Promise<number> => {
    // const circuit = await getDocumentById(userFirestore, getCircuitsCollectionPath(MACI_CEREMONY_ID), circuitId)
    // const circuitData = circuit.data()
    // if (!circuitData) return 0
    // const { waitingQueue } = circuitData
    return 0 
}

/**
 * Retrieve the number of users that failed to contribute to a circuit.
 * @param circuitId <string> - the id of the circuit
 * @returns <Number> - the number of users that have failed to contribute to the circuit.
 */
export const getFailedContributors = async (circuitId: string): Promise<number> => {
    // const circuit = await getDocumentById(userFirestore, getCircuitsCollectionPath(MACI_CEREMONY_ID), circuitId)
    // const circuitData = circuit.data()
    // if (!circuitData) return 0

    // const { waitingQueue } = circuitData
    // return waitingQueue.contributors.failedContributions
    return 0 
}

/**
 * Retrieve the number of contributors for a specific circuit
 * @param circuitId <string> - the id of the circuit
 * @returns <Number> - the number of users that contributed to the circuit.
 */
export const getCircuitContributors = async (circuitId: string): Promise<number> => {
    // const circuit = await getDocumentById(userFirestore, getCircuitsCollectionPath(MACI_CEREMONY_ID), circuitId)
    // const circuitData = circuit.data()
    // if (!circuitData) return 0

    // const { waitingQueue } = circuitData
    // return waitingQueue.completedContributions
    return 0
}

/**
 * Retrieve the total number of contributors
 * @returns <Number> - the number of users that contributed to the ceremony.
 */
export const getTotalNumberOfContributors = async (): Promise<number> => {
    return 0
}

/**
 * Retrieve the average contribution time
 * @returns <Number> - the avg contribution time.
 */
export const getAvgContributionTime = async (): Promise<number> => {
    return 0
}

/**
 * Retrieve the disk space required for the zKey
 * @returns <Number> - the disk space required.
 */
export const getDiskSpaceRequired = async (): Promise<number> => {
    return 0
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
export const getCurrentContributor = async (): Promise<string> => {
    return ""
}

/**
 * 
 * @returns <boolean> - whether the ceremony is active or not.
 */
export const getCeremonyState = async (): Promise<boolean> => {
    // const ceremony = await getDocumentById(userFirestore, commonTerms.collections.ceremonies.name, MACI_CEREMONY_ID)
    // const ceremonyData = ceremony.data()
    // if (!ceremonyData) return false

    // if (ceremonyData.state === CeremonyState.OPENED) return true 
    return false
}

