/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function(mat) {
    
    let n = mat.length, m = mat[0].length
    let map = new Map()
    for(let r = 0; r < n; r++) {
        for(let c = 0;  c < m; c++) {
            let hash = r - c
            if(map.has(hash)) {
                map.get(hash).enqueue(mat[r][c])
            } else {
                map.set(hash, new MinPriorityQueue())
                map.get(hash).enqueue(mat[r][c])
            }
        }
    }
    
    for(let r = 0; r < n; r++) {
        for(let c = 0;  c < m; c++) {
            let bucket = map.get(r - c)
            mat[r][c] = bucket.dequeue().element
        }
    }
    return mat
    
};