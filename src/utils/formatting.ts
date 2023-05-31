import { ITiming } from "./interfaces"

/**
 * Truncate a string and put ... in the middle.
 * @param str <string> - the string to be truncated.
 * @param n <number> - the number of characters to be kept from the beginning and the end of the string.
 * @returns <string> - the truncated string.
 */
export const getEllipsisTxt = (str: string, n = 6): string => {
    if (str) {
        return `${str.slice(0, n)}...${str.slice(str.length - n)}`
    }
    return ''
}

/**
 * Get seconds, minutes, hours and days from milliseconds.
 * @param millis <number> - the amount of milliseconds.
 * @returns <Timing> - a custom object containing the amount of seconds, minutes, hours and days in the provided millis.
 */
export const getSecondsMinutesHoursFromMillis = (millis: number): ITiming => {
    let delta = millis / 1000

    const days = Math.floor(delta / 86400)
    delta -= days * 86400

    const hours = Math.floor(delta / 3600) % 24
    delta -= hours * 3600

    const minutes = Math.floor(delta / 60) % 60
    delta -= minutes * 60

    const seconds = Math.floor(delta) % 60

    return {
        seconds: seconds >= 60 ? 59 : seconds,
        minutes: minutes >= 60 ? 59 : minutes,
        hours: hours >= 24 ? 23 : hours,
        days
    }
}

/**
 * Convert a ITiming object to a string.
 * @param timing <ITiming> - a custom object containing the amount of seconds, minutes, hours and days.
 * @returns <string> - a string representing the provided timing.
 */
export const timingToString = (timing: ITiming): string => {
    const { seconds, minutes, hours, days } = timing
    let str = ''
    if (days > 0) {
        str += `${days}d `
    }
    if (hours > 0) {
        str += `${hours}h `
    }
    if (minutes > 0) {
        str += `${minutes}m `
    }
    if (seconds > 0) {
        str += `${seconds}s`
    }
    return str ? str : 'N/A'
}