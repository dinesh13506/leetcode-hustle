/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    
    let rowIndex = new Array(matrix.length)
    rowIndex.fill(0)
    //console.log(rowIndex)
    let n = matrix.length
    let getMinimum = function() {
        let min = Infinity
        let row = -1
        for(let i = 0; i < n; i++) {
            if(rowIndex[i] < n && matrix[i][rowIndex[i]] < min) {
                row = i
                min = matrix[i][rowIndex[i]]
            }
        }
        return row
    }
    let ans = 0
    while( k > 0) {
        let rowNo = getMinimum()
        //console.log(rowNo)
        let colNo = rowIndex[rowNo]
        ans = matrix[rowNo][colNo]
        rowIndex[rowNo]++
        k--
    }
    return ans
};