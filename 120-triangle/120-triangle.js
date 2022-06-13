/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    
    
    let memo = new Map()
    let dp = function(i,j) {
        
        if(i < 0 || j < 0 || j > i) {
            return Infinity
        }
        if(i == 0 && j == 0) {
            return triangle[0][0]
        }
        let key = `${i},${j}`
        if(memo.has(key)) {
            return memo.get(key)
        }
        let sum = triangle[i][j] + Math.min(dp(i-1, j), dp(i-1, j-1))
        memo.set(key,sum)
        return memo.get(key)
    }
    
    let minpathsum = Infinity
    let m = triangle.length
    for(let j = 0; j < triangle[m-1].length; j++) {
        minpathsum = Math.min(minpathsum, dp(m-1, j))
    }
    return minpathsum
};