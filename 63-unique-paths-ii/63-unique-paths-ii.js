/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    
    let m = obstacleGrid.length, n = obstacleGrid[0].length
    let dp = new Array(m)
    for(let i = 0; i < m; i++) {
        dp[i] = new Array(n)
        dp[i].fill(0)
    }
    
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(obstacleGrid[i][j] == 1) {
                dp[i][j] = 0
            }
            else if( i == 0 && j == 0) {
                dp[i][j] = 1
            }
            else {
                let up = 0 
                if(i > 0 ) {
                    up = dp[i-1][j]
                }
                let left = 0
                if( j > 0) {
                    left = dp[i][j-1]
                }
                dp[i][j] = up + left
            }
        }
    }
    return dp[m-1][n-1]
};