/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    
    let m = matrix.length, n = matrix[0].length
    
    let i = 0, j = n-1
    while(i < m && j >=0) {
        let curr = matrix[i][j]
        if(curr === target) {
            return true
        } else if(target < curr) {
            j--
        } else {
            i++
        }
    }
    return false
};