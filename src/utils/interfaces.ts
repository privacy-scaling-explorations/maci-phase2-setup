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