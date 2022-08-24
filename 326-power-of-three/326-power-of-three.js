/**
 * @param {number} n
 * @return {boolean}
 */
const max = Math.pow(2,31) - 1
const pow = parseInt(Math.log(max) / Math.log(3))
const value = Math.pow(3, pow)
var isPowerOfThree = function(n) {
    
    if(n <= 0) return false
    return value % n == 0
};