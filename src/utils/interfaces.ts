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
    diskSpaceRequired: number
}

export interface ITranscript {
    contributorId: string 
    zKeyIndex: string
    url: string 
    content: string 
}