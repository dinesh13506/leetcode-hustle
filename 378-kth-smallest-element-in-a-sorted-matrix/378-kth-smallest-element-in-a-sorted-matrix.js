/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    
    const n = matrix.length
    let start = matrix[0][0], end = matrix[n-1][n-1]
    
    let countNumbersLessThanMid = (mid) => {
        let greatestLeftOfMid = start, smallestRightOfMid = end
        let count = 0
        let row = n - 1, col = 0
        while(row >= 0 && col < n) {
            let curr = matrix[row][col]
            if(mid < curr) {
                smallestRightOfMid = Math.min(smallestRightOfMid, curr)
                row--
            } else if(curr <= mid ) {
                greatestLeftOfMid = Math.max(greatestLeftOfMid, curr)
                count += row + 1
                col++
            }
        }
        return {
            count : count,
            greatestLeftOfMid : greatestLeftOfMid,
            smallestRightOfMid : smallestRightOfMid
        }
    }
    
    while(start < end) {
        let mid = start + parseInt((end - start) / 2)
        let response = countNumbersLessThanMid(mid)
        if(response["count"] == k) {
            return response["greatestLeftOfMid"]
        } else if(response["count"] < k) {
            start = response["smallestRightOfMid"]
        } else {
            end = response["greatestLeftOfMid"]
        }
    }
    return start
};