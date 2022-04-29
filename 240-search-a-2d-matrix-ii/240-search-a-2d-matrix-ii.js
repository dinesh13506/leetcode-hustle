/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let m = matrix.length, n = matrix[0].length
    if(m < 1 || n < 1) {
        return false
    }
    let col = n - 1, row = 0
    while(col >=0 && row < m) {
        if(matrix[row][col] == target) {
            return true
        }
        else if(target < matrix[row][col]) {
            col--
        } else {
            row++
        }
    }
    return false
};