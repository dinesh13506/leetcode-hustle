/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    
    //return minDistanceMemo(word1, word2)
    return minDistanceBottomUp(word1, word2)
};



var minDistanceMemo = function(word1, word2) {
    
    let m = word1.length, n = word2.length
    let memo = new Array(m+1)
    for(let i = 0; i <=m; i++) {
        memo[i] = new Array(n+1)
        memo[i].fill(-1)
    }
    let dp = function(i,j) {
        if(i == 0 || j == 0) {
            return 0
        }
        if(memo[i][j] != -1) {
            return memo[i][j]
        }
        if(word1[i-1] == word2[j-1]) {
            memo[i][j] =  1 + dp(i-1, j-1)
        } else {
           memo[i][j] =  Math.max(dp(i-1,j), dp(i, j-1))
        }
        return memo[i][j]
    }
    
    let lcs = dp(m,n)
    let ops = (m-lcs) + (n-lcs)
    return ops
};

var minDistanceBottomUp = function(word1, word2) {
    
    let m = word1.length, n = word2.length
    let dp = new Array(m+1)
    for(let i = 0; i <=m; i++) {
        dp[i] = new Array(n+1)
        dp[i].fill(0)
    }
    for(let i = 1; i <= m; i++) {
        for(let j =1; j <=n; j++) {
            if(word1[i-1] == word2[j-1]) {
                dp[i][j] = 1 + dp[i-1][j-1]
            } else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
            }
        }
    }
    let lcs = dp[m][n]
    let ops = (m-lcs) + (n-lcs)
    return ops
};