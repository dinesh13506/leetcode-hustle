/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    
    let s1 = p
    let s2 = s
    let m = s1.length
    let n = s2.length
    
    let memo = new Array(m)
    for(let i = 0; i < m; i++) {
        memo[i] = new Array(n)
        memo[i].fill(-1)
    }
    
    let dp = function(i , j) {
        
        if(i < 0 && j < 0) return true
        if(i < 0 && j >= 0) return false
        if(i >=0 && j < 0) {
            let c = i
            while(c>=0) {
                if(s1[c] != '*') return false
                c--
            }
            return true
        }
        
        if(memo[i][j] != -1) {
            return memo[i][j]
        }
        
        if(s1[i] === s2[j] || s1[i] === '?') {
            memo[i][j] =  dp(i-1, j-1)
            return memo[i][j]
        }
        if(s1[i] === '*') {
            memo[i][j] =  dp(i-1,j) || dp(i,j-1)
            return memo[i][j]
        }
        memo[i][j] =  false
        return memo[i][j]
    }
    
    return dp(m-1,n-1)
};