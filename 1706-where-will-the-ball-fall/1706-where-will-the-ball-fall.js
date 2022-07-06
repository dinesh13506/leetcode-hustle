/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function(grid) {
    
    let m = grid.length, n = grid[0].length
    let result = new Array(n)
    result.fill(-1)
    for(let col = 0; col < n; col++) {
        let curr_row = 0, curr_col = col
        while(curr_row < m) {
            let curr_value = grid[curr_row][curr_col]
            if(curr_value == 1 && curr_col + 1 < n && grid[curr_row][curr_col+1] == 1) {
                curr_col++
                curr_row++
            }
            else if(curr_value == -1 && curr_col - 1 >=0 && grid[curr_row][curr_col-1] == -1) {
                curr_col--
                curr_row++
            } else {
                break
            }
        }
        result[col] = curr_row == m ? curr_col : -1
    }
    return result
};