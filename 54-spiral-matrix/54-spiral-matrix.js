/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let m = matrix.length, n = matrix[0].length
    let t = 0, b = m -1, l = 0, r = n - 1
    let answer = []
    while(t <= b && l <= r) {
        
        //left to right
        for(let j = l; j <= r; j++) {
            answer.push(matrix[t][j])
        }
        //top to bottom
        for(let i = t + 1; i <= b; i++) {
            answer.push(matrix[i][r])
        }
        if(t != b) {
            for(let j = r -1; j >= l; j--) {
                answer.push(matrix[b][j])
            }
        }
        if(l != r) {
            for(let j = b - 1; j > t; j--) {
                answer.push(matrix[j][l])
            }
        }
        t++
        b--
        l++
        r--
    }
    return answer
};