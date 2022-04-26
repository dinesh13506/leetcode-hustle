/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var removeOnes = function(grid) {
    
    let m = grid.length, n = grid[0].length
    
    let flipcolumn = function(c) {
        for(let i = 0; i < m; i++) {
            grid[i][c] = 1 - grid[i][c]
        }
    }
    
    for(let j = 0; j < n; j++) {
        if(grid[0][j] == 1) {
            flipcolumn(j)
        }
    }
    
    for(let i = 1; i < m; i++) {
        for(let j = 1; j < n; j++) {
            if(grid[i][j-1] != grid[i][j]) {
                return false
            }
        }
    }
    return true
};