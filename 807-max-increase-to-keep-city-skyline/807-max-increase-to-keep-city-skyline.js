/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
    
    let n = grid.length
    let max_in_row = new Array(n)
    let max_in_col = new Array(n)
    max_in_row.fill(-Infinity)
    max_in_col.fill(-Infinity)
    
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            max_in_row[i] = Math.max(max_in_row[i],grid[i][j])
            max_in_col[j] = Math.max(max_in_col[j],grid[i][j])
        }
    }
    
    let ans = 0
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            ans = ans + Math.min(max_in_row[i],max_in_col[j]) - grid[i][j]
        }
    }
    return ans
};