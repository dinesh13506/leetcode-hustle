/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const m = matrix.length;
    const n = matrix[0].length;
    
    let p1 = 0;
    let p2 = (m * n) - 1;
    
    while(p1 <= p2) {
        let mid = parseInt( (p1 + p2) / 2);
        let rowNo = parseInt(mid / n);
        let colNo = parseInt(mid % n);
        if(matrix[rowNo][colNo] == target) {
            return true;
        }
        else if(target < matrix[rowNo][colNo]) {
            p2 = mid - 1;
            
        } else if(target > matrix[rowNo][colNo]) {
            p1 = mid + 1;
        }
    }
    return false;
};