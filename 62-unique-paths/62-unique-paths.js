/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePathsMemo = function(m, n) {
    
    
    let memo = new Array(m)
    for(let i = 0; i < m; i++) {
        memo[i] = new Array(n)
        memo[i].fill(-1)
    }
    
    let dp = (i,j) => {
        if(i == 0 || j == 0) {
            return 1
        }
        if(memo[i][j] != -1) {
            return memo[i][j]
        }
        memo[i][j] =  dp(i-1,j) + dp(i,j-1)
        return memo[i][j]
    }
    
    return dp(m-1,n-1)
};


var uniquePaths = function(m, n) {
    
    
    let dp = new Array(m)
    for(let i = 0; i < m; i++) {
        dp[i] = new Array(n)
        dp[i].fill(0)
    }
    
    for(let c = 0; c < n; c++) {
        dp[0][c] = 1
    }
    
    for(let r = 0; r < m; r++) {
        dp[r][0] = 1
    }
    
    for(let r = 1; r < m; r++) {
        for(let c = 1;  c < n; c++) {
            dp[r][c] = dp[r-1][c] + dp[r][c-1]
        }
    }
    
    return dp[m-1][n-1]
};