/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    
    let n = triangle.length
    let dp = new Array(n)
    for(let i = 0; i < n; i++) {
        dp[i] = new Array(n)
        dp[i].fill(-1)
    }
    
    for(let j = 0; j <=n-1; j++) {
        dp[n-1][j] =  triangle[n-1][j]
    }
    
    for(let i = n-2; i >=0; i--) {
        for(let j = i; j>=0; j--) {
            let down = triangle[i][j] + dp[i+1][j]
            let dgdown = triangle[i][j] + dp[i+1][j+1]
            dp[i][j] = Math.min(down,dgdown)
        }
    }
    
    return dp[0][0]
};