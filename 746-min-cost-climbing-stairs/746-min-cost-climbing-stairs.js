/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
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