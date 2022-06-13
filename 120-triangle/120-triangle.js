/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotalMemo = function(triangle) {
    
    let m = triangle.length
    let n = triangle[m-1].length
    let memo = new Array(m)
    for(let i = 0; i < m; i++) {
        memo[i] = new Array(n)
        memo[i].fill(-1)
    }
    let dp = function(i,j) {
        
        if(i < 0 || j < 0 || j > i) {
            return Infinity
        }
        if(i == 0 && j == 0) {
            return triangle[0][0]
        }
        if(memo[i][j] != -1) {
            return memo[i][j]
        }
        let sum = triangle[i][j] + Math.min(dp(i-1, j), dp(i-1, j-1))
        memo[i][j] = sum
        return memo[i][j]
    }
    
    let minpathsum = Infinity
   
    for(let j = 0; j < triangle[m-1].length; j++) {
        minpathsum = Math.min(minpathsum, dp(m-1, j))
    }
    return minpathsum
};


var minimumTotal = function(triangle) {
    
    let m = triangle.length
    let n = triangle[m-1].length
    let prev = new Array(m)
    prev.fill(Infinity)
    prev[0] = triangle[0][0]
    for(let i = 1; i < m; i++) {
        let curr = new Array(m)
        for(let j = 0; j <= i; j++) {
            curr[j] = triangle[i][j] + Math.min( (prev[j] === undefined ? Infinity : prev[j]), (prev[j-1] === undefined ? Infinity : prev[j-1]))
        }
        prev = curr
    }
    let minpathsum = Infinity
   
    for(let j = 0; j < triangle[m-1].length; j++) {
        minpathsum = Math.min(minpathsum, prev[j])
    }
    return minpathsum
};