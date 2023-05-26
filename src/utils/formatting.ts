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
    return ""
};