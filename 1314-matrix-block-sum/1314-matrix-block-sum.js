/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
var matrixBlockSum = function(mat, k) {
    
    let m = mat.length, n = mat[0].length
    let answer = new Array(m)
    for(let i = 0; i <m ;i++) {
        answer[i] = new Array(n)
    }
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            let rmin = Math.max(0, i-k)
            let rmax = Math.min(m-1, i+k)
            let cmin = Math.max(0, j-k)
            let cmax = Math.min(n-1, j+k)
            let sum = 0
            for(let r = rmin; r<= rmax; r++) {
                for(let c = cmin; c <= cmax; c++) {
                    sum += mat[r][c]
                }
            }
            answer[i][j] = sum
        }
    }
    return answer
};