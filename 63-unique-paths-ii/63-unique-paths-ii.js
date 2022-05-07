/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    
    let m = obstacleGrid.length, n = obstacleGrid[0].length
    let prev = new Array(n)
    prev.fill(0)
    
    let mod = 2 * Math.pow(10,9)
    for(let i = 0; i < m; i++) {
        let curr = new Array(n)
        curr.fill(0)
        for(let j = 0; j < n; j++) {
            if(obstacleGrid[i][j] == 1) {
                curr[j] = 0
            }
            else if( i == 0 && j == 0) {
                curr[j] = 1
            }
            else {
                let up = 0 
                if(i > 0 ) {
                    up = prev[j]
                }
                let left = 0
                if( j > 0) {
                    left = curr[j-1]
                }
                curr[j] = ((up%mod) + (left%mod))%mod
            }
        }
        prev = curr.slice()
    }
    return prev[n-1]
};