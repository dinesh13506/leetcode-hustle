/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    
    let memo = new Array(m)
    for(let i = 0; i < m; i++) {
        memo[i] = new Array(n)
        memo[i].fill(-1)
    }
    let dp = (i, j) => {
        if(i < 0 || i >=m || j < 0 || j >= n) {
            return 0
        }
        if(i == 0 && j == 0) {
            return 1
        }
        
        if(memo[i][j] != -1) {
            return memo[i][j]
        }
        
        memo[i][j] =  dp(i-1,j) + dp(i, j-1)
        return memo[i][j]
    }
    
    return dp(m-1, n-1)
};