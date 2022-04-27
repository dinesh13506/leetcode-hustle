/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
    
    let m = matrix.length, n = matrix[0].length, result = 0
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(matrix[i][j]) {
                if(i === 0 || j === 0) {
                    result = result + 1
                } else {
                    let cell_val =  1 + Math.min(matrix[i][j-1], Math.min(matrix[i-1][j-1],matrix[i-1][j]))
                    result = result + cell_val
                    matrix[i][j] = cell_val
                }
            }
        }
    }
    return result
};