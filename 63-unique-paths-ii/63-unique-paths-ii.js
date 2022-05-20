/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(grid) {
    
    //DP on grid
    let n = grid.length, m = grid[0].length
    
    let memo = new Array(n)
    for(let i = 0; i < n; i++) {
        memo[i] = new Array(m)
        memo[i].fill(-1)
    }
    
    let uniquePaths = function(i,j) {
        if(grid[i][j] == 1) {
            return 0
        }
        if(i == 0 && j == 0) {
            return 1
        }
        
        
        //already computed
        if(memo[i][j] != -1) {
            return memo[i][j]
        }
        
        //left
        let left = 0
        if(j > 0) {
            left = uniquePaths(i, j-1)
        }
        let up = 0
        if(i > 0) {
            up = uniquePaths(i-1,j)
        }
        
        memo[i][j] = left + up //compute and store
        return memo[i][j]
        
    }
    return uniquePaths(n-1, m-1)
    
    
};