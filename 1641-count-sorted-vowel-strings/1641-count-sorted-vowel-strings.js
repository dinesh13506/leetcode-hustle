/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function(n) {
    
    let vowels = 5
    let memo = new Array(n+1)
    for(let len=0; len <= n; len++) {
        memo[len] = new Array(vowels+1)
        memo[len].fill(-1)
    }
    
    let dp = function(len, vowels) {
        
        if(len == 1) {
            return vowels
        }
        if(vowels == 1) {
            return 1
        }
        
        return dp(len-1, vowels) + dp(len, vowels-1)
    }
    
    return dp(n,5)
};