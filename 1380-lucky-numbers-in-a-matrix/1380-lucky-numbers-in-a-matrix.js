/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    let m = matrix.length, n = matrix[0].length
    let rowMin = new Array(m)
    let colMax = new Array(n)
    
    for(let i = 0; i < m; i++) {
        rowMin[i] = matrix[i][0]
        for(let j = 1; j < n; j++) {
            rowMin[i] = Math.min(rowMin[i],matrix[i][j])
        }
    }
    //console.log(rowMin)
    for(let j = 0; j < n; j++) {
        colMax[j] = matrix[0][j]
        for(let i = 1; i < m; i++) {
            colMax[j] = Math.max(colMax[j],matrix[i][j])
        }
    }
    //console.log(colMax)
    let ans = []
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(matrix[i][j] == rowMin[i] && matrix[i][j] == colMax[j]) {
                ans.push(matrix[i][j])
            }
        }
    }
    return ans
};