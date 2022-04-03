/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    
    let m = word1.length, n = word2.length
    let dp = new Array(m+1)
    for(let i = 0; i <=m ;i++) {
        dp[i] = new Array(n+1)
    }
    //when word1 is empty
    for(let j = 0; j <=n ;j++) {
        dp[0][j] = j
    }
    //when word2 is empty
    for(let i = 0; i <= m; i++) {
        dp[i][0] = i
    }
    
    dp[0][0] = 0
    
    
    for(let i = 1; i <=m ; i++) {
        for(let j = 1; j<=n; j++) {
            if(word1[i-1] == word2[j-1]) {
                dp[i][j] = dp[i-1][j-1]
            } else {
                dp[i][j] = 1 + Math.min(Math.min(dp[i-1][j],dp[i][j-1]),dp[i-1][j-1])
            }
        }
    }
    
    return dp[m][n]
};