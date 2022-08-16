/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    
    let m = mat.length, n = mat[0].length
    const dist = new Array(m)
    for(let r = 0;  r < m; r++) {
        dist[r] = new Array(n)
        dist[r].fill(Infinity)
    }
    
    
    for(let r = 0;  r < m; r++) {
        for(let c = 0; c < n; c++) {
            if(mat[r][c] == 0) {
                dist[r][c] = 0
            } else {
                if(r-1 >= 0) {
                    dist[r][c] = Math.min(dist[r][c], 1 + dist[r-1][c])
                }
                if(c-1 >= 0) {
                     dist[r][c] = Math.min(dist[r][c], 1 + dist[r][c-1])
                }
            }
        }
    }
    
    for(let r = m-1;  r >=0 ; r--) {
        for(let c = n-1; c >= 0; c--) {
                if(r+1 < m) {
                    dist[r][c] = Math.min(dist[r][c], 1 + dist[r+1][c])
                }
                if(c + 1 < n) {
                     dist[r][c] = Math.min(dist[r][c], 1 + dist[r][c+1])
                }
            }
    }
    return dist
    
};