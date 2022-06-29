/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    
    let m = grid.length, n = grid[0].length
    
    let dfs = (i, j) => {
        if(i < 0 || i >=m || j <0 || j >= n) {
            return
        }
        if(grid[i][j] == '0' || grid[i][j] == '2') {
            return
        }
        grid[i][j] = '2'
        dfs(i + 1, j)
        dfs(i , j + 1)
        dfs(i - 1, j)
        dfs(i, j-1)
    }
    
    let count = 0
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(grid[i][j] == '1') {
                count++
                dfs(i,j)
            }
        }
    }
    return count
};