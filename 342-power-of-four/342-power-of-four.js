/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    
    if(n <= 0) return false
    
    return (Math.log(n)/ Math.log(2)) % 2 == 0
};