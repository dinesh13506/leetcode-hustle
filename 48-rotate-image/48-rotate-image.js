/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const n = matrix.length
    //reverse matrix
    let rstart = 0, rend = n - 1
    while(rstart <= rend) {
        let temp = matrix[rstart]
        matrix[rstart] = matrix[rend]
        matrix[rend] = temp
        rstart++
        rend--
    }
    //console.log(matrix)
    for(let i = 0; i < n; i++) {
        for(let j = i + 1; j < n; j++) {
            let temp = matrix[i][j]
            matrix[i][j] = matrix[j][i] 
            matrix[j][i]  = temp
        }
    }
};