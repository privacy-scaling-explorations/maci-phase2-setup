export interface ICircuit {
    id: string
    name: string
    waitingQueue: number
    failedContributions: number
    completedContributions: number
    avgContributionTime: number
    diskSpaceRequired: number
    currentContributor: string
}

export interface IAvgStats {
    waitingQueue: number
    failedContributions: number
    completedContributions: number
    avgContributionTime: number
    diskSpaceRequired: string
    diskSpaceUnit: string
}

export interface ITranscript {
    contributorId: string
    zKeyIndex: string
    url: string
    content: string
    circuitName: string
    contributionHash: string
}

export interface ILiveCeremonyData {
    alive: boolean 
    circuitSequence: number
    currentContributor: string 
    circuitName: string 
    ETA: string 
    timeSpent: string 
    contributionStep: string 
}