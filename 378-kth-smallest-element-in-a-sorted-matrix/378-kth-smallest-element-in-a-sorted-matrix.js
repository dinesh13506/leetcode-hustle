/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    
    let colIndex = new Array(matrix.length)
    colIndex.fill(0)
    //console.log(colIndex)
    let n = matrix.length
    let getMinimum = function() {
        let min = Infinity
        let row = -1
        for(let i = 0; i < n; i++) {
            if(colIndex[i] < n && matrix[i][colIndex[i]] < min) {
                row = i
                min = matrix[i][colIndex[i]]
            }
        }
        return row
    }
    let ans = 0
    while( k > 0) {
        let rowNo = getMinimum()
        //console.log(rowNo)
        let colNo = colIndex[rowNo]
        ans = matrix[rowNo][colNo]
        colIndex[rowNo]++
        k--
    }
    return ans
};