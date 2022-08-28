/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function(mat) {
    
    let n = mat.length, m = mat[0].length
    
    
    for(let j = 0; j < m; j++) {
        let r = 0, c = j, diag = []
        while(r < n && c < m) {
            diag.push(mat[r][c])
            r++
            c++
        }
        if(r >= n || c >= m) {
            diag.sort((a,b) => {return a - b})
            //console.log(diag)
            r = 0, c = j
            let i = 0
            while(r < n && c < m && i < diag.length) {
                mat[r][c] = diag[i]
                r++
                c++
                i++
            } 
        }
        
    }
    
    for(let i = 0; i < n; i++) {
        let c = 0, r = i, diag = []
        while(c < m && r < n) {
           diag.push(mat[r][c])
            r++
            c++ 
        }
        if(r >= n || c >= m) {
            diag.sort((a,b) => {return a - b})
            //console.log(diag)
            c = 0, r = i
            let p = 0
            while(r < n && c < m && p < diag.length) {
                mat[r][c] = diag[p]
                r++
                c++
                p++
            } 
        }
        
    }
    return mat
    
};