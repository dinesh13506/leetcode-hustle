/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    
    let n = s.length
    let ans = 0
    let dp = new Array(n)
    for(let i = 0; i < n; i++) {
        dp[i] = new Array(n)
        dp[i].fill(false)
    }
    
    for(let i = 0; i < n; i++) {
        dp[i][i] = true
        ans++
    }
    for(let i = 0; i < n-1; i++) {
        if(s[i] == s[i+1]) {
            dp[i][i+1] = true
            ans++
        }
    }
    
    for(let len = 3; len <=n; len++) {
        let i = 0, j = i + len -1
        while(j < n) {
            dp[i][j] = dp[i+1][j-1] && s[i] == s[j]
            ans = ans + (dp[i][j] == true ? 1 : 0)
            i++
            j++
        }
    }
    return ans
};