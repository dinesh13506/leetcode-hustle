/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    const directions = [
        [0,-1],
        [0, 1],
        [-1,0],
        [1, 0]
    ]
    let n = matrix.length, m = matrix[0].length, result = 0
    
    let memo = new Array(n)
    for(let i = 0; i < n; i++) {
        memo[i] = new Array(m)
        memo[i].fill(-1)
    }
    
    
    let dfsUtil = function(i , j) {
        if(memo[i][j] != -1) {
            return memo[i][j]
        }
        let longestPathLen = 0
        for(let direction of directions) {
            let dx = direction[0], dy = direction[1]
            if(i + dx >=0 && i + dx < n && j + dy >=0 && j + dy < m) {
                 if(matrix[i+dx][j+dy] > matrix[i][j]) {
                     longestPathLen = Math.max(longestPathLen, dfsUtil(i + dx, j + dy))
                 }
            }
           
        }
        longestPathLen = longestPathLen + 1
        memo[i][j] = longestPathLen
        return memo[i][j]
    }
    
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            result = Math.max(result, dfsUtil(i,j))
        }
    }
    return result
};