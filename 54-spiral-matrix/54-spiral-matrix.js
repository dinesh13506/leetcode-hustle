/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    
    let result = []
    let m = matrix.length, n = matrix[0].length
    let row_start = 0, row_end = m-1, col_start = 0, col_end = n-1
    while(row_start <= row_end && col_start <= col_end) {
        
        //left to right
        for(let j = col_start; j<= col_end; j++) {
            result.push(matrix[row_start][j])
        }
        //top to bottom
        for(let i = row_start + 1; i<= row_end; i++) {
            result.push(matrix[i][col_end])
        }
        if(row_end != row_start) {
            //right to left
            for(let j = col_end-1; j>= col_start; j--) {
                result.push(matrix[row_end][j])
            } 
        }
       
        if(col_start != col_end) {
            //bottom to top
            for(let i = row_end-1; i > row_start; i--) {
                result.push(matrix[i][col_start])
            } 
        }
       
        row_start++
        col_start++
        row_end--
        col_end--
    }
    return result
};