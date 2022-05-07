/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    
    let m = grid.length, n = grid[0].length
    let dp = new Array(m)
    for(let i = 0; i < m; i++) {
        dp[i] = new Array(n)
        dp[i].fill(-1)
    }
    
    for(let i = 0 ; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if( i== 0 && j == 0) {
                dp[i][j] = grid[i][j]
            }
            else {
                let top = Infinity
                if(i > 0 ) {
                    top = dp[i-1][j]
                }
                let left = Infinity
                if( j > 0 ) {
                    left = dp[i][j-1]
                }
                
                dp[i][j] = grid[i][j] + Math.min(top,left)
            }
        }
    }
    
    return dp[m-1][n-1]
};