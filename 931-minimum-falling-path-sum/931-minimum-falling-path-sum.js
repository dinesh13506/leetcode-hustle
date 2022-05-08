/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    
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