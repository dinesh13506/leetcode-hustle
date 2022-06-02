/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    
    let m = matrix.length
    let n = matrix[0].length
    
    let result = new Array(n)
    for(let i = 0; i < n; i++) {
        result[i] = new Array(m)
    }
    
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            result[j][i] = matrix[i][j]
        }
    }
    return result
};