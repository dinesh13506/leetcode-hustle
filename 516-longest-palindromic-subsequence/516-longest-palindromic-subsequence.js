/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    
    let rs = s.split('').reverse().join()
    
    let n = s.length, m = rs.length
    let memo = new Array(n)
    for(let i = 0; i < n; i++) {
        memo[i] = new Array(m)
        memo[i].fill(-1)
    }
    
    let dp = function(index1, index2) {
        if(index1 < 0 || index2 < 0) {
            return 0
        }
        if(memo[index1][index2] != -1) {
            return memo[index1][index2]
        }
        if(s[index1] === rs[index2]) {
            memo[index1][index2] =  1 + dp(index1 - 1, index2 - 1)
            return memo[index1][index2]
            
        } else {
            memo[index1][index2] =  Math.max(dp(index1-1, index2), dp(index1, index2-1))
            return memo[index1][index2]
        }
    }
    
    return dp(n-1, m-1)
};