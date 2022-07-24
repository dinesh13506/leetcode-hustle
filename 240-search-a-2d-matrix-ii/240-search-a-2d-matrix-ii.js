/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    
    let m = matrix.length, n = matrix[0].length
    let i = 0, j = n-1
    while(i >= 0 && i < m && j >= 0 && j < n) {
        if(target == matrix[i][j]) {
            return true
        } else if(target < matrix[i][j]) {
            j--
        } else {
            i++
        }
    }
    return false
};