import { getSecondsMinutesHoursFromMillis, timingToString } from './formatting'
import { IAvgStats, ILiveCeremonyData } from './interfaces'

// the ceremony ID (to be set in the .env file)
export const MACI_CEREMONY_ID = process.env.REACT_APP_CEREMONY_ID || '0'
// generate the ceremony bucket URL based on the.env data
export const bucketUrl = `https://${process.env.REACT_APP_CEREMONY_BUCKET!}.s3.${
    process.env.REACT_APP_AWS_REGION
}.amazonaws.com`

// The default live ceremony data (empty object)
export const emptyLiveCeremonyData: ILiveCeremonyData = {
    alive: false,
    circuitSequence: 0,
    currentContributor: 'N/A',
    circuitName: 'N/A',
    ETA: timingToString(getSecondsMinutesHoursFromMillis(0)),
    timeSpent: timingToString(getSecondsMinutesHoursFromMillis(0)),
    contributionStep: 'N/A'
}

// The default average stats (empty object)
export const emptyAverageStats: IAvgStats = {
    waitingQueue: 0,
    failedContributions: 0,
    completedContributions: 0,
    avgContributionTime: timingToString(getSecondsMinutesHoursFromMillis(0)),
    diskSpaceRequired: '0',
    diskSpaceUnit: 'KB'
}
