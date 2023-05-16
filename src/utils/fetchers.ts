import { MACI_CEREMONY_ID } from "./constants"
import { userFirestore, userFunctions } from "./firebase"
// import { getCeremonyCircuits, getDocumentById } from "@p0tion/actions"

export const getAllCircuits = async () => {
    // const circuits = getCeremonyCircuits(userFirestore, MACI_CEREMONY_ID)
    // console.log(circuits)
    // return circuits
    return ""
}

/**
 * Retrieve the number of users in the waiting queue.
 * @param circuitId <string> - the id of the circuit
 * @returns <Number> - the number of users in the waiting queue.
 */
export const getUsersInWaitingQueue = async (circuitId: string): Promise<number> => {
    return 0 
}

/**
 * Retrieve the number of contributors for a specific circuit
 * @param circuitId <string> - the id of the circuit
 * @returns <Number> - the number of users that contributed to the circuit.
 */
export const getCircuitContributors = async (circuitId: string): Promise<number> => {
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
    return false;
}

