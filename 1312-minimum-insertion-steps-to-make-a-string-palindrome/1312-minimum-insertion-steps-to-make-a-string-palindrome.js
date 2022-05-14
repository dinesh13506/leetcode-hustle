/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
    
    let n = s.length
    let revs = s.split('').reverse().join('')
    let dp = new Array(n + 1)
    for(let i = 0; i <= n; i++) {
        dp[i] = new Array(n + 1)
        dp[i].fill(0)
    }
    for(let i = 1; i <=n; i++) {
        for(let j = 1; j <=n ; j++) {
            let ch1 = s[i-1], ch2 = revs[j-1]
            if(ch1 === ch2) {
                dp[i][j] = 1 + dp[i-1][j-1]
            } else {
                dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1])
            }
        }
    }
    
    return n - dp[n][n]
    
};