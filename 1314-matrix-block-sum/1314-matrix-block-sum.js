/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
var matrixBlockSum = function(mat, k) {
    
    let m = mat.length, n = mat[0].length
    let dp = new Array(m+1)
    for(let i = 0; i <= m; i++) {
        dp[i] = new Array(n+1)
        dp[i].fill(0)
    }
    
    //row wise
    for(let i = 1; i <= m; i++) {
        let sum = 0
        for(let j = 1; j <=n; j++) {
            sum = sum + mat[i-1][j-1]
            dp[i][j] = sum
        }
        
    }
    //console.log(dp)
    
    //col wise
    for(let j = 1; j <= n; j++) {
        let sum = 0
        for(let i = 1; i <= m; i++) {
            sum = sum + dp[i][j]
            dp[i][j] = sum
        }
    }
    
    //console.log(dp)
    let answer = new Array(m)
    for(let i = 0; i <m ;i++) {
        answer[i] = new Array(n)
    }
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            let rmin = Math.max(0, i-k)
            let rmax = Math.min(m-1, i+k)
            let cmin = Math.max(0, j-k)
            let cmax = Math.min(n-1, j+k)
            let sum = 0
            
            rmin++, rmax++, cmin++, cmax++
            answer[i][j] = dp[rmax][cmax] - dp[rmax][cmin-1] - dp[rmin-1][cmax] + dp[rmin-1][cmin-1]
        }
    }
    return answer
};