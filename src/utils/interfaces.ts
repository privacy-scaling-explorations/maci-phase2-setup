/**
 * @interface ICircuit
 * @member {string} id - the circuit id
 * @member {string} name - the circuit name
 * @member {number} waitingQueue - the number of contributors waiting in the queue
 * @member {number} failedContributions - the number of failed contributions
 * @member {number} completedContributions - the number of completed contributions
 * @member {string} avgContributionTime - the average contribution time
 * @member {number} diskSpaceRequired - the disk space required
 * @member {string} currentContributor - the current contributor id
 */
export interface ICircuit {
    id: string
    name: string
    waitingQueue: number
    failedContributions: number
    completedContributions: number
    avgContributionTime: string
    diskSpaceRequired: number
    currentContributor: string
}

/**
 * @interface IAvgStats
 * @member {number} waitingQueue - the number of contributors waiting in the queue
 * @member {number} failedContributions - the number of failed contributions
 * @member {number} completedContributions - the number of completed contributions
 * @member {string} avgContributionTime - the average contribution time
 * @member {number} diskSpaceRequired - the disk space required
 * @member {string} diskSpaceUnit - the disk space measurement unit
 */
export interface IAvgStats {
    waitingQueue: number
    failedContributions: number
    completedContributions: number
    avgContributionTime: string
    diskSpaceRequired: string
    diskSpaceUnit: string
}

/**
 * @interface ITranscript
 * @member {string} contributorId - the contributor id
 * @member {string} zKeyIndex - the zkey index
 * @member {string} url - the url of the transcript
 * @member {string} content - the content of the transcript
 * @member {string} circuitName - the circuit name
 * @member {string} contributionHash - the contribution hash
 */
export interface ITranscript {
    contributorId: string
    zKeyIndex: string
    url: string
    content: string
    circuitName: string
    contributionHash: string
}

/**
 * @interface ILiveCeremonyData
 * @member {boolean} alive - whether the ceremony is alive or not
 * @member {number} circuitSequence - the circuit sequence (order in the ceremony)
 * @member {string} currentContributor - the current contributor id
 * @member {string} circuitName - the circuit name
 * @member {string} ETA - the estimated time left for this contribution
 * @member {string} timeSpent - the time spent
 * @member {string} contributionStep - the contribution step of the current contributor
 */
export interface ILiveCeremonyData {
    alive: boolean 
    circuitSequence: number
    currentContributor: string 
    circuitName: string 
    ETA: string 
    timeSpent: string 
    contributionStep: string 
}

/**
 * @interface ITiming
 * @member {number} seconds - the amount of seconds
 * @member {number} minutes - the amount of minutes
 * @member {number} hours - the amount of hours
 * @member {number} days - the amount of days
 */
export interface ITiming {
    seconds: number
    minutes: number
    hours: number
    days: number
}