/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function(grid) {
    
    let r = grid.length, c = grid[0].length
    let memo = new Array(r)
    for(let i = 0; i < r; i++) {
        memo[i] = new Array(c)
        for(let j = 0; j < c; j++) {
            memo[i][j] = new Array(c)
            memo[i][j].fill(-1)
        }
    }
    let dp = function(i, j1,j2) {
        
        if(j1 < 0 || j2 < 0 || j1 >= c || j2 >= c) {
            return -Infinity
        }
        if(i == r-1) {
            if(j1 == j2) {
                return grid[i][j1]
            } else {
                return grid[i][j1] + grid[i][j2]
            }
        }
        
        if(memo[i][j1][j2] != -1) {
            return memo[i][j1][j2]
        }
        
        let maxi = -Infinity
        for(let delta1 = -1; delta1 <= 1; delta1++) {
            for(let delta2 = -1; delta2 <=1; delta2++) {
                let value = 0
                if(j1 == j2) {
                    value = grid[i][j1]
                } else {
                    value = grid[i][j1] + grid[i][j2]
                }
                value = value + dp(i+1,j1+delta1, j2+delta2)
                maxi = Math.max(maxi, value)
            }
        }
        memo[i][j1][j2] = maxi
        return maxi
    }
    
    return dp(0,0,c-1)
};