/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function(costs) {
    
    const paints = [1,2,3]
    let n = costs.length
    let memo = new Array(n)
    for(let i = 0; i < n; i++) {
        memo[i] = new Array(4)
        memo[i].fill(-1)
    }
    
    let dp = function(i, prevPaint) {
        if(i < 0) {
            return 0
        }
        if(memo[i][prevPaint] != -1) {
            return memo[i][prevPaint]
        }
        let min = Infinity
        for(let p = 1; p <= 3; p++) {
            if(prevPaint != p) {
                min = Math.min(costs[i][p-1] + dp(i-1,p), min)
            }
        }
        memo[i][prevPaint] =  min
        return memo[i][prevPaint]
    }
    
    
    return dp(n-1, 0)
};