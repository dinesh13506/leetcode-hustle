/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    
    let m = grid.length, n = grid[0].length
    while(k > 0) {
        let newGrid = new Array(m)
        for(let i = 0; i < m; i++) {
            newGrid[i] = new Array(n)
        }
        //case1 
        for(let i = 0; i < m; i++) {
            for(let j = 0; j < n-1; j++) {
                newGrid[i][j+1] = grid[i][j]
            }
        }
        //case2 
        for(let i = 0; i < m-1; i++) {
            newGrid[i+1][0] = grid[i][n-1]
        }
        //case3 
        newGrid[0][0] = grid[m-1][n-1]
        grid = newGrid 
        k--
    }
    return grid
};