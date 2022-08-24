/**
 * @param {number} n
 * @return {boolean}
 */
const maxInt = Math.pow(2,31) - 1
const pow = parseInt(Math.log(maxInt) / Math.log(3)) // power of 3 to accomodate maxInt
const value = Math.pow(3, pow) // max value of power 3
var isPowerOfThree = function(n) {
    if(n <= 0) return false
    return value % n == 0
};