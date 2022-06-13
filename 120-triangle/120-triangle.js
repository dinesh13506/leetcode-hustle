/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotalMemo = function(triangle) {
    
    let m = triangle.length
    let n = triangle[m-1].length
    let memo = new Array(m)
    for(let i = 0; i < m; i++) {
        memo[i] = new Array(n)
        memo[i].fill(-1)
    }
    let dp = function(i,j) {
        
        if(i < 0 || j < 0 || j > i) {
            return Infinity
        }
        if(i == 0 && j == 0) {
            return triangle[0][0]
        }
        if(memo[i][j] != -1) {
            return memo[i][j]
        }
        let sum = triangle[i][j] + Math.min(dp(i-1, j), dp(i-1, j-1))
        memo[i][j] = sum
        return memo[i][j]
    }
    
    let minpathsum = Infinity
   
    for(let j = 0; j < triangle[m-1].length; j++) {
        minpathsum = Math.min(minpathsum, dp(m-1, j))
    }
    return minpathsum
};


var minimumTotal = function(triangle) {
    
    let m = triangle.length
    let n = triangle[m-1].length
    let dp = new Array(m)
    for(let i = 0; i < m; i++) {
        dp[i] = new Array(i)
        dp[i].fill(0)
    }
    dp[0] = [triangle[0][0]]
    for(let i = 1; i < m; i++) {
        for(let j = 0; j <= i; j++) {
            dp[i][j] = triangle[i][j] + Math.min( (dp[i-1][j] === undefined ? Infinity : dp[i-1][j]), (dp[i-1][j-1] === undefined ? Infinity : dp[i-1][j-1]))
        }
    }
    let minpathsum = Infinity
   
    for(let j = 0; j < triangle[m-1].length; j++) {
        minpathsum = Math.min(minpathsum, dp[m-1][j])
    }
    return minpathsum
};