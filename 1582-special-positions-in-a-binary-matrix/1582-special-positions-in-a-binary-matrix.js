/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    
    let m = mat.length, n = mat[0].length
    let row = new Array(m)
    row.fill(0)
    
    let col = new Array(n)
    col.fill(0)
    
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(mat[i][j] == 1) {
                row[i]++
            }
        }
    }
    
   
    for(let j = 0; j < n; j++) {
        for(let i = 0; i < m; i++) {
            if(mat[i][j] == 1) {
                col[j]++
            }
        }
    }
    
    let count = 0
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(mat[i][j] == 1 && row[i] == 1 && col[j] == 1) {
                count++
            }
        }
    }
    
    return count
    
    
    
};