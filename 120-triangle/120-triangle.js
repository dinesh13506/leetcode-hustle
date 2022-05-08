/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    
    let n = triangle.length
    let dp = new Array(n)
    dp.fill(-1)
    
    for(let j = 0; j <=n-1; j++) {
        dp[j] =  triangle[n-1][j]
    }
    
    for(let i = n-2; i >=0; i--) {
        let curr = new Array(n)
        for(let j = i; j>=0; j--) {
            let down = triangle[i][j] + dp[j]
            let dgdown = triangle[i][j] + dp[j+1]
            curr[j] = Math.min(down,dgdown)
        }
        dp = curr
    }
    
    return dp[0]
};