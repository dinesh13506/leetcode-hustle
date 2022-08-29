/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    
    let m = grid.length, n = grid[0].length
    
    let dir = [
        [0,1],
        [1,0],
        [0,-1],
        [-1,0]
    ]
    
    let dfs = (i,j) => {
        grid[i][j] = -1
        for(let d of dir) {
            let x = d[0] + i, y = d[1] + j
            if(x >= 0 && x < m && y >=0 && y < n && grid[x][y] == 1) {
                dfs(x,y)
            }
        }
    }
    
    let islands = 0
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(grid[i][j] == 1) {
                islands++
                dfs(i,j)
            }
        }
    }
    return islands
};