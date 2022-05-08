/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    
    
    let m = triangle.length, n = triangle[0].length
    let memo = new Array(m)
    for(let i = 0; i < m; i++) {
        memo[i] = new Array(m)
        memo[i].fill(-1)
    }
    let dp = function(i,j) {
        if(i== m-1) {
            return triangle[i][j]
        }
        if(memo[i][j]  != -1) {
            return memo[i][j]
        }
        
        let down = triangle[i][j] + dp(i+1,j)
        let digdown = triangle[i][j] + dp(i+1,j+1)
        memo[i][j] = Math.min(down,digdown)
        return  memo[i][j]
    }
    
    return dp(0,0)
};