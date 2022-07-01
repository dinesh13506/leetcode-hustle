/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairsMemo = function(cost) {
    
    let memo = new Array(cost.length + 1)
    memo.fill(-1)
    let dp = function(i) {
        if( i == 0 || i == 1) {
            return 0
        }
        if(memo[i] != -1) {
            return memo[i]
        }
        memo[i] = Math.min( cost[i-1] + dp(i-1),cost[i-2] +  dp(i-2))
        return memo[i]
    }
    
    let top = cost.length
    return dp(top)
};


var minCostClimbingStairsTopDown = function(cost) {
    
    let top = cost.length
    let dp = new Array(top+1)
    dp[0] = 0
    dp[1] = 0
    for(let i = 2; i <= top; i++) {
        dp[i] = Math.min(cost[i-1] + dp[i-1], cost[i-2] + dp[i-2])
    }
    return dp[top]
};


var minCostClimbingStairs = function(cost) {
    
    let top = cost.length
    let prev2 = 0, prev1 = 0
    for(let i = 2; i <= top; i++) {
        let curr = Math.min(cost[i-1] + prev1, cost[i-2] + prev2)
        prev2 = prev1
        prev1 = curr
    }
    return prev1
};