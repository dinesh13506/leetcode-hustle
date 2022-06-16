/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function(grid) {
    
    let m = grid.length, n = grid[0].length
    let maxgold = 0
    
    let directions = [
        [-1,0],
        [0,-1],
        [1,0],
        [0,1]
    ]
    let dfs = (i,j) => {
        if(i < 0 || i >= m || j < 0 || j >= n || grid[i][j] == 0) {
            return 0
        }
        let origin = grid[i][j]
        grid[i][j] = 0
        let gold = 0
        for(let dir of directions) {
            gold = Math.max(gold, dfs(i + dir[0] , j + dir[1]))
        }
        grid[i][j] = origin
        return origin + gold
    }
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            let gold = dfs(i,j) 
            maxgold = maxgold < gold ? gold : maxgold
        }
    }
    return maxgold
};