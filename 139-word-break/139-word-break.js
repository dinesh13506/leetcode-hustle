/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    
    const set = new Set(wordDict)
    const n = s.length
    let dp = new Array(n+1)
    dp.fill(0)
    
    for(let end = 0; end < n; end++) {
        for(let start = 0; start <= end; start++) {
            let substr = s.substring(start, start + (end - start + 1))
            if(set.has(substr)) {
                dp[end] = dp[end] + (start > 0 ? dp[start-1] : 1)
            }
        }
    }
    
    return dp[n-1] > 0
};