/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    
    let set = new Set(wordDict)
    const n = s.length
    
    let memo = new Array(n)
    memo.fill(-1)
    
    let dp = (start) => {
        if(start == n) return true
        if(memo[start] != -1) {
            return memo[start] 
        }
        for(let end = start; end < n; end++) {
            let substr = s.substring(start, start + end - start  + 1)
            if(set.has(substr) && dp(start + end - start  + 1)) {
                memo[start] =  true
                return memo[start]
            }
        }
        memo[start] =  false
        return memo[start]
    }
    
    return dp(0)
};