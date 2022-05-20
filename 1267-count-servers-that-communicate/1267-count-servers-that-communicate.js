/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function(grid) {
    
    let n = grid.length, m = grid[0].length
    let rowcount = new Array(n)
    rowcount.fill(0)
    let colcount = new Array(m)
    colcount.fill(0)
    
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(grid[i][j] == 1) {
                rowcount[i]++
                colcount[j]++
            }
        }
    }
    
    //console.log(rowcount)
    //console.log(colcount)
    let ans = 0
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(grid[i][j] == 1) {
                if(rowcount[i] > 1 || colcount[j] > 1) {
                    ans++
                }
            }
        }
    }
    return ans
};