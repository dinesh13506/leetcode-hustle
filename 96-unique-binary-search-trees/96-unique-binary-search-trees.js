/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    
    let dp = new Array(n+1)
    dp[0] = 1
    for(let i = 1; i <=n; i++) {
        dp[i] = 0
        for(let j = 0; j < i ;j++) {
            dp[i] = dp[i] + (dp[j] * dp[i-j-1])
        }
    }
    return dp[n]
};