/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function(grid) {
    
    let start_row = -1, start_col = -1, remain = 0
    let m = grid.length, n = grid[0].length
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(grid[i][j] == 1) {
                start_row = i, start_col = j
            }
            if(grid[i][j] >=0) {
                remain++
            }
        }
    }
    
    
    
    let paths = 0
    let backtrack = function(start_row, start_col,rem) {
        //console.log(start_row,start_col,rem)
        if(grid[start_row][start_col] == 2 && rem == 1) {
            paths++
            return
        }
        rem--
        let backup = grid[start_row][start_col]
        grid[start_row][start_col] = -4 //mark as visited
        let x_dir = [-1,0,1, 0]
        let y_dir = [ 0,1,0, -1]
        for(let i = 0; i < 4; i++) {
            let new_row = start_row + x_dir[i]
            let new_col = start_col + y_dir[i]
            if(new_row < 0 || new_row >= m) {
                continue
            }
            if(new_col < 0 || new_col >= n) {
                continue
            }
            
            if(grid[new_row][new_col] < 0) {
                continue
            }
            backtrack(new_row,new_col,rem)
        }
        grid[start_row][start_col] = backup
    }
    backtrack(start_row,start_col,remain)
    return paths
};