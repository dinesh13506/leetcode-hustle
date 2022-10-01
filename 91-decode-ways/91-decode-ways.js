/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    
    const n = s.length
    
    let memo = new Array(n)
    memo.fill(null)
    let dp = (i) => {
        if(i >= n) {
            return 1
        }
        if(memo[i]) {
            return memo[i]
        }
        let ways =  s[i] >= '1' && s[i] <= '9' ? dp(i+1) : 0
        if(i+1 < n) {
            let str = s[i] + s[i+1]
            if(str >= '10' && str<= '26') {
                ways += dp(i+2)
            }
        }
        memo[i] =  ways
        return memo[i]
    }
    return dp(0)
};