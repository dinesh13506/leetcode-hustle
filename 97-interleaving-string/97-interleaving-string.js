/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    let m = s1.length, n = s2.length
    if( m + n != s3.length) {
        return false
    }
    let i = 0, j = 0, k = 0
    
    let memo = new Array(m)
    for(let p = 0; p < m; p++) {
        memo[p] = new Array(n)
        memo[p].fill(-1)
    }
    
    let dp = (i, j , k) => {
        
        if(i == m) {
            return s2.substring(j) == s3.substring(k)
        }
        if(j == n) {
            return s1.substring(i) == s3.substring(k)
        }
        if(memo[i][j] != -1) {
            return memo[i][j]
        }
        let ans = false
        if(s3[k] == s1[i] && dp(i+1, j , k + 1)) {
            ans = true
        }
        if(s3[k] == s2[j] && dp(i, j + 1, k + 1)) { 
            ans = true
        }
        memo[i][j] =  ans
        return memo[i][j]
    }
    
   
    return dp(0,0,0)
};