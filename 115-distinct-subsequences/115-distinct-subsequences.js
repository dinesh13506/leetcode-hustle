/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    
    let m = s.length, n = t.length
    let memo = new Array(m)
    for(let i = 0; i < m; i++) {
        memo[i] = new Array(n)
        memo[i].fill(-1)
    }
    
    let dp = function(i,j) {
        
        if(j < 0) {
            return 1
        }
        if(i < 0) {
            return 0
        }
        
        if(memo[i][j] != -1) {
            return memo[i][j]
        }
        if(s[i] === t[j]) {
            memo[i][j] =  dp(i-1, j-1) + dp(i-1,j)
        } else {
            memo[i][j] =  dp(i-1,j)
        }
        return memo[i][j]
    }
    return dp(m-1, n-1)
};