/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    
    let m = matrix.length, n = matrix[0].length
    let visited = new Array(m)
    for(let i = 0; i < m; i++) {
        visited[i] = new Array(n)
        visited[i].fill(false)
    }
    
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(visited[i][j] == false) {
                let r = i , c = j
                let set = new Set()
                set.add(matrix[r][c])
                while(r < m && c < n) {
                    visited[r][c] = true
                    if(set.has(matrix[r][c]) == false) {
                        return false
                    }
                    r++
                    c++
                }
            }
        }
    }
    
    return true
};