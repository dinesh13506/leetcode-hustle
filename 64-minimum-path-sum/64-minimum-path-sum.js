/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    
    let m = grid.length, n = grid[0].length
    let memo = new Array(m)
    for(let i = 0; i < m; i++) {
        memo[i] = new Array(n)
        memo[i].fill(-1)
    }
    
    let dp = function(i,j) {
        if( i == 0 && j == 0) {
            return grid[i][j]
        }
        if( i < 0 || j < 0) {
            return Infinity
        }
        
        if(memo[i][j] != -1) {
            return memo[i][j]
        }
        
        let top = dp(i-1,j)
        let left  = dp(i, j-1)
        memo[i][j] = grid[i][j] + Math.min(top,left)
        return memo[i][j]
    }
    
    return dp(m-1,n-1)
};