/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {number}
 */
var numSubmatrixSumTarget = function(matrix, target) {
    
    let m = matrix.length, n = matrix[0].length
    let prefixsum = new Array(m+1)
    for(let i = 0; i < m + 1; i++) {
        prefixsum[i] = new Array(n+1)
        prefixsum[i].fill(0)
    }
    for(let i = 1; i < m + 1; i++) {
        for(let j = 1; j < n + 1; j++) {
            prefixsum[i][j] = prefixsum[i][j-1] + prefixsum[i-1][j] - prefixsum[i-1][j-1] + matrix[i-1][j-1]
        }
    }
    
    //console.log(prefixsum)
    
    let count = 0, currsum = 0
    let map = new Map()
    for(let r1 = 1; r1 < m + 1; r1++) {
        for(let r2 = r1; r2 < m + 1; r2++) {
            map.clear()
            map.set(0,1)
            for(let c = 1; c < n + 1; c++) {
                currsum =  prefixsum[r2][c] - prefixsum[r1-1][c]
                count = count + ( map.get(currsum - target) || 0 )
                map.set(currsum, (map.get(currsum) || 0 ) + 1)
            }
        }
    }
    return count
};