/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
    
    let m = grid.length, n = grid[0].length
    let dfs = (i, j) => {
        if(i < 0 || j < 0 || i >= m || j >= n) {
            return false
        }
        if(grid[i][j] == 1) {
            return true
        }
        grid[i][j] = 1
        let d1 = dfs(i + 1, j)
        let d2 = dfs(i, j+1)
        let d3 = dfs(i-1, j)
        let d4 = dfs(i, j-1)
        return ( d1 && d2 &&  d3 && d4 )
    }
    
    let ans = 0
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(grid[i][j] == 0) {
                ans += dfs(i,j) ? 1 : 0
            }
        }
    }
    return ans
};