/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSumMemo = function(matrix) {
    
    let n = matrix.length
    let memo = new Array(n)
    for(let i = 0; i < n; i++) {
        memo[i] = new Array(n)
        memo[i].fill(-1)
    }
    let dp = function(i,j) {
        if(j < 0 || j >= n) {
            return Infinity
        }
        
        if( i == 0 ) {
            return matrix[0][j]
        }
        
        if(memo[i][j] != -1) {
            return memo[i][j]
        }
        
        let top = matrix[i][j] + dp(i-1,j)
        let leftdiag = matrix[i][j] + dp(i-1,j-1)
        let rightdiag = matrix[i][j] + dp(i-1,j+1)
        
        memo[i][j] = Math.min(top , Math.min(leftdiag, rightdiag))
        return memo[i][j]
    }
    
    let ans = Infinity
    for(let j = 0; j < n; j++) {
        ans = Math.min(ans, dp(n-1,j))
    }
    return ans
};


var minFallingPathSumTab = function(matrix) {
    
    let n = matrix.length
    let dp = new Array(n)
    for(let i = 0; i < n; i++) {
        dp[i] = new Array(n)
        dp[i].fill(-1)
    }
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            if(i == 0) {
                dp[i][j] = matrix[i][j]
            } else {
                let top = matrix[i][j] + ( dp[i-1][j] )
                let ld =  matrix[i][j] + ( dp[i-1][j-1] || Infinity)
                let rd =  matrix[i][j] + ( dp[i-1][j+1] || Infinity)
                dp[i][j] = Math.min(top, Math.min(ld,rd))
            }
        }
    }
    
    let ans = Infinity
    for(let i = 0; i < n; i++) {
        ans = Math.min(ans, dp[n-1][i])
    }
    return ans
};


var minFallingPathSum = function(matrix) {
    
    let n = matrix.length
    let prev = new Array(n)
    for(let j = 0; j < n; j++) {
        prev[j] = matrix[0][j]
    }
    for(let i = 0; i < n; i++) {
        let curr = new Array(n)
        for(let j = 0; j < n; j++) {
            if(i == 0) {
                curr[j] = matrix[i][j]
            } else {
                let top = matrix[i][j] + ( prev[j] )
                let ld =  matrix[i][j] + ( prev[j-1] || Infinity)
                let rd =  matrix[i][j] + (prev[j+1] || Infinity)
                curr[j] = Math.min(top, Math.min(ld,rd))
            }
        }
        prev = curr
    }
    
    let ans = Infinity
    for(let i = 0; i < n; i++) {
        ans = Math.min(ans, prev[i])
    }
    return ans
};