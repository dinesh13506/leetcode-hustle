/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(matrix.length <= 0) {
        return false;
    }
    const m = matrix.length;
    const n = matrix[0].length;
    let r = 0, c = n - 1;
    while(r < m && c >=0) {
        let mid = matrix[r][c];
        if(target == mid) {
            return true;
        } else if(target < mid) {
            c--;
        } else {
            r++;
        }
    }
    return false;
};