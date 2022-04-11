/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    
    const m = grid.length, n = grid[0].length
    let ans = new Array(m)
    for(let i = 0; i < m; i++) {
        ans[i] = new Array(n)
    }
    for(let i =0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            let c = (j + k) % n
            let iterations = parseInt((j+k) / n)
            let r = (i+iterations) % m
            ans[r][c] = grid[i][j]
        }
    }
    return ans
};