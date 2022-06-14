/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function(s1, s2) {
    let m = s1.length, n = s2.length
    
    let dp = new Array(m+1)
    for(let i = 0; i <=m; i++) {
        dp[i] = new Array(n+1)
        dp[i].fill(0)
    }
    
    let sum = 0
    for(let i = 1; i <=m; i++) {
        sum = sum + s1[i-1].charCodeAt()
        dp[i][0] = sum
    }
    sum = 0
    for(let j = 1; j <= n; j++) {
        sum = sum + s2[j-1].charCodeAt()
        dp[0][j] = sum
    }
    
    
    for(let i = 1; i <= m; i++) {
        for(let j=1; j <=n; j++) {
            if(s1[i-1] === s2[j-1]) {
                dp[i][j] = 0 + dp[i-1][j-1]
            } else {
                dp[i][j] = Math.min(dp[i-1][j] + s1[i-1].charCodeAt(), dp[i][j-1] + s2[j-1].charCodeAt())
            }
        }
    }
        
    return dp[m][n]
};