/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let pow = BigInt(Math.pow(2,31))
    let ans = 0n
    let s = n.toString(2)
    let i = s.length - 1
    while(i>= 0) {
        ans = ans + BigInt(s[i]) * pow
        pow = pow / 2n
        i--
    }
    return ans
    
};