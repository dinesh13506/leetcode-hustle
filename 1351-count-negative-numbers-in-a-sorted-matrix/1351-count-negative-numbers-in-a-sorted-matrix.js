/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegativesBrute = function(grid) {
    
    let count = 0
    let m = grid.length, n = grid[0].length
    for(let i = 0; i < m; i++) {
        for(let j = n-1; j >=0; j--) {
            if(grid[i][j] >= 0) {
                break
            } else {
                count++
            }
        }
    }
    return count
};


var countNegatives = function(grid) {
    
    let count = 0
    let m = grid.length, n = grid[0].length
    for(let i = 0; i < m; i++) {
        if(grid[i][0] < 0 ) {
            count += n
            continue
        }
        if(grid[i][n-1] >= 0) {
            continue
        }
        
        let start = 0, end = n-1
        while(start <= end) {
            let mid = parseInt((start + end)/2)
            if(grid[i][mid] >= 0) {
                start = mid + 1
            } else {
                end = mid - 1
            }
        }
        
        count += (n - start)
    }
    return count
};