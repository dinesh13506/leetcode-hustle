// Top Down Approch

var longestCommonSubsequence = function(text1, text2) {
    
    let n = text1.length
    let m = text2.length
    
    let memo = new Array(n)
    for(let i = 0; i < n; i++) {
        let temp = new Array(m)
        temp.fill(0)
        memo[i] = temp
    }
    let dp = function(i,j) {
        if(i >= n || j >= m) {
            return 0
        }
        
        if(memo[i][j] == 0) {
            if(text1[i] == text2[j]) {
                memo[i][j] = 1 + dp(i+1,j+1)
            } else {
                memo[i][j] = Math.max(dp(i+1,j),dp(i,j+1))
            }
        }
        
        return memo[i][j]
    }
    return dp(0,0)
};

//Bottom up approch

var longestCommonSubsequenceBottom = function(text1, text2) {
    
    let n = text1.length
    let m = text2.length
    
    let dp = new Array(n+1)
    for(let i = 0; i <=n ; i++) {
        let temp = new Array(m+1)
        temp.fill(0)
        dp[i] = temp
    }
    
    
    for(let i = n-1; i>=0; i--) {
        for(let j= m-1; j>=0; j--) {
            if(text1[i] === text2[j]) {
                dp[i][j] = 1 + dp[i+1][j+1]
            } else {
                dp[i][j] = Math.max(dp[i+1][j],dp[i][j+1])
            }
        }
    }
    return dp[0][0]
};