/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let memo = new Array(m)
    for(let i = 0; i < m; i++) {
        memo[i] = new Array(n)
        memo[i].fill(-1)
    }
    let mod = 2 * Math.pow(10,9)
    
    let dp = function(i,j) {
        
        if(i == 0 && j == 0) {
            return 1
        }
        if(i < 0 || j < 0) {
            return 0
        }
        if(memo[i][j] != -1) {
            return memo[i][j]
        }
        
        let up = dp(i-1,j)
        let left = dp(i, j-1)
        memo[i][j] = ( (up) % mod + (left) % mod ) % mod
        return memo[i][j]
    }
    
    let ans = dp(m-1,n-1)
    console.log(ans)
    return ans % mod
};