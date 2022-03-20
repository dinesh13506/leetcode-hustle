/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfThree = function(n) {
    
    let maxInteger = Number.MAX_SAFE_INTEGER
    let x = Math.log10(maxInteger) / Math.log10(3)
    return Math.pow(3,parseInt(x)) % n === 0
};