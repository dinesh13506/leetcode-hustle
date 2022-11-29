/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var isValidPalindrome = function(s, k) {
    
    
    let memo = new Array(s.length);
    for(let i = 0; i < s.length; i++) {
        memo[i] = new Array(s.length);
        memo[i].fill(Infinity);
    }
    let dp = (i, j) => {
        if(i == j) return 0;
        if(i == j - 1) {
            return s[i] == s[j] ? 0 : 1;
        }
        
        if(memo[i][j] != Infinity) return memo[i][j];
        if(s[i] == s[j]) {
            memo[i][j] =  dp(i + 1, j - 1);
        } else {
             memo[i][j] =  Math.min( 1 + dp(i+1, j), 1 + dp(i, j - 1), 2 + dp(i+1, j - 1));
        }
        return memo[i][j];
    }
    
    return dp(0,s.length - 1) <= k;
};