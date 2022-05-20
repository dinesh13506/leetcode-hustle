/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    
    let count = 0
    let m = grid.length, n = grid[0].length
    for(let i = 0; i < m; i++) {
        for(let j = n-1; j >=0; j--) {
            if(grid[i][j] >= 0) {
                break
            } else {
                count++
            }
        }
    }
    return count
};