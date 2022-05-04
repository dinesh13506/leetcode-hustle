/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let dp = new Array(n+1)
    let prev2 = 1
    let prev = 1
    for(let i = 2; i <= n; i++) {
        let curri = prev2 + prev
        prev2 = prev
        prev = curri
    }
    return prev
};