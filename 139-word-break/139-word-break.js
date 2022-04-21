/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    
    let substring = function(s,start,end) {
        let i = start
        let res = []
        while(i <= end) {
            res.push(s[i])
            i++
        }
        return res.join('')
    }
    let dp = new Array(s.length)
    dp.fill(0)
    let set = new Set()
    for(let word of wordDict) {
        set.add(word)
    }
    for(let end = 0; end <= s.length-1; end++) {
        for(let start = 0; start <= end; start++) {
            //console.log(start, end,substring(s,start,end))
            let w = substring(s,start,end)
            if(set.has(w)) {
                if(start > 0 ) {
                   dp[end] = dp[end] + dp[start-1]  
                } else {
                    dp[end] = dp[end] + 1
                }
                
            }
        }
    }
    //console.log(dp)
    return dp[s.length-1] > 0 
};