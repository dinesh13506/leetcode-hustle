/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    
    let m = obstacleGrid.length, n = obstacleGrid[0].length
    let memo = new Array(m)
    for(let i = 0; i < m; i++) {
        memo[i] = new Array(n)
        memo[i].fill(-1)
    }
    
    let mod = 2 * Math.pow(10,9)
    
    let dp = function(i,j) {
        if( i >=0 && j >=0 && obstacleGrid[i][j] == 1) {
            return 0
        }
        if(i == 0 && j == 0) {
            return 1
        }
        if(i < 0 || j < 0) {
            return 0
        }
        if(memo[i][j] != -1) {
            return memo[i][j] 
        }
        
        let left = dp(i,j-1)
        let up = dp(i-1,j)
        memo[i][j] = ((left%mod) + (up%mod))%mod
        return memo[i][j]
    }
    return dp(m-1,n-1)
};