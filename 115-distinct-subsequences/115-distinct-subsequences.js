/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinctMemo = function(s, t) {
    
    let m = s.length, n = t.length
    let memo = new Array(m)
    for(let i = 0; i < m; i++) {
        memo[i] = new Array(n)
        memo[i].fill(-1)
    }
    
    let dp = function(i,j) {
        
        if(j < 0) {
            return 1
        }
        if(i < 0) {
            return 0
        }
        
        if(memo[i][j] != -1) {
            return memo[i][j]
        }
        if(s[i] === t[j]) {
            memo[i][j] =  dp(i-1, j-1) + dp(i-1,j)
        } else {
            memo[i][j] =  dp(i-1,j)
        }
        return memo[i][j]
    }
    return dp(m-1, n-1)
};

var numDistinct = function(s, t) {
    
    let m = s.length, n = t.length
    let dp = new Array(m + 1)
    for(let i = 0; i <= m; i++) {
        dp[i] = new Array(n + 1)
        dp[i].fill(0)
    }
    
    // j = 0
    for(let i = 0; i <= m; i++) {
        dp[i][0] = 1
    }
    //i = 0
    for(let j = 1; j <= n; j++) {
        dp[0][j] = 0
    }
    
    for(let i = 1; i <= m; i++)  {
        for(let j = 1; j <= n; j++) {
            if(s[i-1] === t[j-1]) {
                dp[i][j] = dp[i-1][j-1] + dp[i-1][j]
            } else {
                dp[i][j] = dp[i-1][j]
            }
        }
    }
    return dp[m][n]
    
};