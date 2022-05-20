/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    
    let m = grid.length, n = grid[0].length
    let paramter = 0
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(grid[i][j] == 1) {
                let up = 0
                if(i >= 1) {
                    up = grid[i-1][j]
                }
                let down = 0
                if(i < m-1) {
                    down = grid[i+1][j]
                }
                
                let left = 0
                if(j >= 1) {
                    left = grid[i][j-1]
                }
                
                let right = 0
                if( j < n-1) {
                    right = grid[i][j+1]
                }
                
                paramter += 4 - (left + right + up + down)
            }
        }
    }
    return paramter
};