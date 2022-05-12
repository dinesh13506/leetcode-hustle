/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    
    
    let m = text1.length, n = text2.length
    let memo = new Array(m)
    for(let i = 0 ; i < m; i++) {
        memo[i] = new Array(n)
        memo[i].fill(-1)
    }
    
    let dp = function(index1, index2) {
        
        if(index1 < 0 || index2 < 0) {
            return 0
        }
        if(memo[index1][index2] != -1) {
            return memo[index1][index2]
        }
        if(text1[index1] === text2[index2]) {
            memo[index1][index2] =  1 + dp(index1-1, index2-1)
            return memo[index1][index2]
        }
        
        memo[index1][index2] =  0 + Math.max(dp(index1-1, index2), dp(index1, index2-1))
        return memo[index1][index2]
    }
    
    return dp(m-1,n-1)
};