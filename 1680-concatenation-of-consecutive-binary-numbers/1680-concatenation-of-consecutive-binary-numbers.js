/**
 * @param {number} n
 * @return {number}
 */
var concatenatedBinary = function(n) {
    
    const mod = 1000000007n
    let length = 0n
    let ans = 0n
    for(let i = 1; i <= n; i++) {
        if ( (i & (i-1) ) == 0 ) {
            length++
        }
        ans = ((ans << length) | BigInt(i)) % mod
    }
    return ans
};