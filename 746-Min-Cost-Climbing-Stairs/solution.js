/**
 * @param {number[]} cost
 * @return {number}
 */
 var minCostClimbingStairs = function(cost) {
    
    let memo = new Map()
    let dp = function(i) {
        if(i == 0 || i == 1) {
            return 0
        }
        if(memo.has(i) === false) {
            memo.set(i,Math.min(dp(i-1) + cost[i-1],dp(i-2) + cost[i-2]))
        }
        return memo.get(i)
    }
    
    return dp(cost.length)
};