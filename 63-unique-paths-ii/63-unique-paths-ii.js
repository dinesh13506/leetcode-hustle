/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstaclesMemo = function(grid) {
    
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

var uniquePathsWithObstaclesTab = function(grid) {
    //DP on grid
    let n = grid.length, m = grid[0].length
    let dp = new Array(n)
    for(let i = 0; i < n; i++) {
        dp[i] = new Array(m)
        dp[i].fill(0)
    }
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(grid[i][j] == 1) {
                dp[i][j] = 0
            } else if(i == 0 && j == 0) {
                dp[i][j] = grid[i][j] == 1  ? 0 : 1
            } else {
                let top = 0
                if(i > 0) {
                    top = dp[i-1][j]
                }
                let left = 0
                if(j > 0 ) {
                    left = dp[i][j-1]
                }
               dp[i][j] = top + left
            }
        }
    }
    return dp[n-1][m-1]
};

var uniquePathsWithObstacles = function(grid) {
    //DP on grid
    let n = grid.length, m = grid[0].length
    let prev = new Array(m)
    prev.fill(0)
    for(let i = 0; i < n; i++) {
        let curr = new Array(m)
        curr.fill(0)
        for(let j = 0; j < m; j++) {
            if(grid[i][j] == 1) {
                curr[j] = 0
            } else if(i == 0 && j == 0) {
                curr[j] = grid[i][j] == 1  ? 0 : 1
            } else {
                let top = 0
                if(i > 0) {
                    top = prev[j]
                }
                let left = 0
                if(j > 0 ) {
                    left = curr[j-1]
                }
               curr[j] = top + left
            }
        }
        prev = curr
    }
    return prev[m-1]
};