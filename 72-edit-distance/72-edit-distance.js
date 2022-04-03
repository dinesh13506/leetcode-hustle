/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    
    let memo = new Array(word1.length+1)
    for(let i = 0; i <=word1.length ; i++) {
        memo[i] = new Array(word2.length+1)
        memo[i].fill(-1)
    }
    //console.log(memo)
    let dp = function(m,n) {
        //console.log(memo[m][n],m,n)
        if(memo[m][n] === -1) {
            if(m == 0) {
                memo[m][n] = n
                return n
            } 
            if(n == 0) {
                memo[m][n] =  m
                return m
            }
            if(word1[m-1] === word2[n-1]) {
                memo[m][n] =  dp(m-1,n-1)
            } else {
                memo[m][n] =  1 + Math.min(dp(m,n-1),dp(m-1,n),dp(m-1,n-1))
            }
        }
        return memo[m][n]
    }
    
    return dp(word1.length,word2.length)
};