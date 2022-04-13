/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    
    let matrix = new Array(n)
    for(let i = 0 ; i < n; i++) {
        matrix[i] = new Array(n)
        matrix[i].fill(0)
    }
    let col_start = 0, col_end = n-1 , row_start = 0, row_end = n-1
    let count = 1
    while(col_start <= col_end && row_start <= row_end) {
        
        //top left to top right
        for(let j = col_start; j <= col_end; j++) {
            matrix[row_start][j] = count++
        }
        //top right to top bottom
        for(let i = row_start + 1; i <= row_end; i++) {
            matrix[i][col_end] = count++
        }
        
        //bottom end to bottom start
        for(let j = col_end - 1; j>=col_start; j--) {
            matrix[row_end][j] = count++
        }
        
        //bottom end to top start
        for(let i = row_end - 1; i>row_start; i--) {
            matrix[i][col_start] = count++
        }
        row_start++
        col_start++
        row_end--
        col_end--
    }
    return matrix
    
    
    
};