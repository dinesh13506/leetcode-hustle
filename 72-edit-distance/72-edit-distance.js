/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    
    let m = word1.length
    let n = word2.length
    
    let memo = new Array(m)
    for(let i = 0; i < m; i++) {
        memo[i] = new Array(n)
        memo[i].fill(-1)
    }
    
    let dp = function(i,j) {
        
        if(i < 0) {
            return j + 1
        }
        
        if(j < 0) {
            return i + 1
        }
        
        if(memo[i][j] != -1) {
            return memo[i][j]
        }
         
        if(word1[i] == word2[j]) {
            memo[i][j] = 0 + dp(i-1, j-1)
        } else {
            let insert = 1 + dp(i, j-1)
            let del = 1 + dp(i-1,j)
            let replace = 1 + dp(i-1, j-1)
            memo[i][j] = Math.min(insert, Math.min(del, replace))
        }
        return memo[i][j]
    }
    
    return dp(m-1,n-1)
};