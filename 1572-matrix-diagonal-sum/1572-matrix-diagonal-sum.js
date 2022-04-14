/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let m = mat.length, n = mat[0].length
    let psum = 0, i = 0, j = 0
    while(i <= m-1 && j <= n-1) {
        psum = psum + mat[i][j]
        i++
        j++
    }
    let ssum = 0
    i = 0, j = n-1
    while(i <= m-1 && j>=0) {
        if(i!=j) {
            ssum = ssum + mat[i][j]
        }
        i++
        j--
    }
    
    return psum + ssum
    
};