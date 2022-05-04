/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let n = cost.length
    let k = 2
    let dp = new Array(n+1)
    dp[0] = 0
    dp[1] = 0
    for(let i = 2; i <=n ; i++) {
        let min = Infinity
        for(let j = 1; j <= Math.min(k,i) ;j++) {
            min = Math.min(min, dp[i-j] + cost[i-j])
        }
        dp[i] = min
    }
    return dp[n]
};