/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    
    let n = cost.length
    let dp = new Array(n+1)
    let prev2 = 0
    let prev = 0
    for(let i = 2; i <=n ; i++) {
        let curri = Math.min(prev2 + cost[i-2] , prev + cost[i-1])
        prev2 = prev
        prev = curri
    }
    return prev
};