/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    
    let m = grid.length, n = grid[0].length
    let prev = new Array(m)
    prev.fill(-1)
    
    for(let i = 0 ; i < m; i++) {
        let curr = new Array(m)
        curr.fill(-1)
        for(let j = 0; j < n; j++) {
            if( i== 0 && j == 0) {
                curr[j] = grid[i][j]
            }
            else {
                let top = Infinity
                if(i > 0 ) {
                    top = prev[j]
                }
                let left = Infinity
                if( j > 0 ) {
                    left = curr[j-1]
                }
                
                curr[j] = grid[i][j] + Math.min(top,left)
            }
        }
        prev = curr
    }
    
    return prev[n-1]
};