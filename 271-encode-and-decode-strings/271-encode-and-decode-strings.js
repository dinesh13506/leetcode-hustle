/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
    let seprator = String.fromCharCode(257)
    return strs.join(seprator)
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
    let seprator = String.fromCharCode(257)
    return s.split(seprator)
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */