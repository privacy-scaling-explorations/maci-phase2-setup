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

/**
 * Convert bytes or chilobytes into gigabytes with customizable precision.
 * @param bytesOrKb <number> - the amount of bytes or chilobytes to be converted.
 * @param isBytes <boolean> - true when the amount to be converted is in bytes; otherwise false (= Chilobytes).
 * @returns <number> - the converted amount in GBs.
 */
export const convertBytesOrKbToGb = (bytesOrKb: number, isBytes: boolean): number =>
    Number(bytesOrKb / 1024 ** (isBytes ? 3 : 2))