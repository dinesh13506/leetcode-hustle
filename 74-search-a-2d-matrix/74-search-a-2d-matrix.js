/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let m = matrix.length, n = matrix[0].length
    let row = 0, col = n-1
    while(row < m && col >= 0) {
        let mid = matrix[row][col]
        if(target == mid) {
            return true
        } else if(target < mid) {
            col -= 1
        } else {
            row += 1
        }
    }
    return false
};