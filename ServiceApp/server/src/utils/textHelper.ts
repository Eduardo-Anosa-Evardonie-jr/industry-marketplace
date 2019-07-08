/**
 * Encode Non ASCII characters to escaped characters.
 * @param value The value to encode.
 * @returns The encoded value.
 */
export const encodeNonASCII = (value) => {
    return value ? value.replace(/[\u007F-\uFFFF]/g, (chr) => `\\u${(`0000${chr.charCodeAt(0).toString(16)}`).substr(-4)}`) : undefined;
};

/**
 * Decode escaped Non ASCII characters.
 * @param value The value to decode.
 * @returns The decoded value.
 */
export const decodeNonASCII = (value) => {
    return value ? value.replace(/\\u([\d\w]{4})/gi, (match, grp) => String.fromCharCode(parseInt(grp, 16))) : undefined;
};