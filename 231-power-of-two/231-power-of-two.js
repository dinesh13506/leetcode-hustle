/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    
    if(n <= 0) return false 
    while(n > 1) {
        let remainder = n % 2
        if(remainder != 0) return false
        n = parseInt(n/2)
    }
    return true
};