/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    
    let rs = s.split('').reverse().join()
    
    let n = s.length, m = rs.length
    let dp = new Array(n + 1)
    for(let i = 0; i <= n; i++) {
        dp[i] = new Array(m + 1)
        dp[i].fill(0)
    }
    
    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <=m; j++) {
            let ch1 = s[i-1], ch2 = rs[j-1]
            if(ch1 == ch2) {
                dp[i][j] = 1 + dp[i-1][j-1]
            } else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
            }
        }
    }
    
    return dp[n][m]
};