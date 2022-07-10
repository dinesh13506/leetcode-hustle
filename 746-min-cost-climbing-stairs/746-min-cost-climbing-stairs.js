/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairsMemo = function(cost) {
    let n = cost.length
    let memo = new Array(n + 1)
    memo.fill(-1)
    let dp = function(i) {
        if(i == 0 || i == 1) {
            return 0
        }
        if(memo[i] != -1) return memo[i]
        memo[i] =  Math.min(cost[i-1] + dp(i-1) , cost[i-2] + dp(i-2))
        return memo[i]
    }
    
    return dp(n)
};

var minCostClimbingStairsBottomUp = function(cost) {
    let n = cost.length
    let dp = new Array(n + 1)
    dp[0] = 0
    dp[1] = 0
    for(let i = 2; i <=n ; i++) {
        dp[i] =  Math.min(cost[i-1] + dp[i-1] , cost[i-2] + dp[i-2]) 
    }
    return dp[n]
};


var minCostClimbingStairs = function(cost) {
    let n = cost.length
    let prev2 = 0
    let prev1 = 0
    for(let i = 2; i <=n ; i++) {
        let curr  =  Math.min(cost[i-1] + prev1 , cost[i-2] + prev2) 
        prev2 = prev1
        prev1 = curr
    }
    return prev1
};