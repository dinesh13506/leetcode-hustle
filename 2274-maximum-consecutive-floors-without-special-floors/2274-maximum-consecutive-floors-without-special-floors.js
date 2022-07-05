/**
 * @param {number} bottom
 * @param {number} top
 * @param {number[]} special
 * @return {number}
 */
var maxConsecutive = function(bottom, top, special) {
    
    special.sort(function(a,b) {
        return a < b ? -1 : (a == b ? 0 : 1)
    })
    const n = special.length
    
    let ans = Math.max((special[0] - bottom),(top - special[n-1])) 
    for(let i = 1; i < n; i++) {
        ans = Math.max(ans, special[i] - special[i-1] - 1)
    }
    return ans
};