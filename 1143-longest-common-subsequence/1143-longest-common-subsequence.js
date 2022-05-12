/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    
    
    let m = text1.length, n = text2.length
    let prev = new Array(n+1)
    prev.fill(0)
    

    
    //console.log(dp)
    
    for(let i = 1; i <= m; i++) {
        let curr = new Array(n+1)
        curr.fill(0)
        for(let j = 1; j <= n; j++) {
            if(text1[i-1] === text2[j-1]) {
                curr[j] = 1 + prev[j-1]
            } else {
                curr[j] = Math.max(prev[j], curr[j-1])
            }
        }
        prev = curr
    }
    
    return prev[n]
}


var longestCommonSubsequenceBottomup = function(text1, text2) {
    
    
    let m = text1.length, n = text2.length
    let dp = new Array(m+1)
    for(let i = 0 ; i <= m; i++) {
        dp[i] = new Array(n+1)
        dp[i].fill(0)
    }
    

    
    //console.log(dp)
    
    for(let i = 1; i <= m; i++) {
        for(let j = 1; j <= n; j++) {
            if(text1[i-1] === text2[j-1]) {
                dp[i][j] = 1 + dp[i-1][j-1]
            } else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
            }
        }
    }
    
    return dp[m][n]
}

var longestCommonSubsequenceMemo = function(text1, text2) {
    
    
    let m = text1.length, n = text2.length
    let memo = new Array(m)
    for(let i = 0 ; i < m; i++) {
        memo[i] = new Array(n)
        memo[i].fill(-1)
    }
    
    let dp = function(index1, index2) {
        
        if(index1 < 0 || index2 < 0) {
            return 0
        }
        if(memo[index1][index2] != -1) {
            return memo[index1][index2]
        }
        if(text1[index1] === text2[index2]) {
            memo[index1][index2] =  1 + dp(index1-1, index2-1)
            return memo[index1][index2]
        }
        
        memo[index1][index2] =  0 + Math.max(dp(index1-1, index2), dp(index1, index2-1))
        return memo[index1][index2]
    }
    
    return dp(m-1,n-1)
};