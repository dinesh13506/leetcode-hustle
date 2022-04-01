/**
 * @param {string} s
 * @return {number}
 */
 var longestPalindromeSubseq = function(s) {
    
    let reverse = ""
    for(let ch of s) {
        reverse = ch + reverse
    }
    //console.log(s,reverse)
    let m = s.length
    let n = reverse.length
    let memo = new Array(m+1)
    for(let i = 0; i <=m; i++) {
        memo[i] = new Array(n+1)
    }
    //if s is empty
    for(let j = 0; j <=n; j++) {
        memo[0][j] = 0
    }
    //if reverse is empty
    for(let i = 0; i <=m; i++) {
        memo[i][0] = 0
    }
    
    for(let i = 1; i<=m; i++) {
        for(let j = 1; j<=n; j++) {
            if(s[i-1] === reverse[j-1]) {
                memo[i][j] = 1 + memo[i-1][j-1]
            } else {
                memo[i][j] = Math.max(memo[i-1][j],memo[i][j-1])
            }
        }
    }
    return memo[m][n]
};