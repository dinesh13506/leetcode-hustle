/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    
    let rs = s.split('').reverse().join()
    
    let n = s.length, m = rs.length
    let prev = new Array(m + 1)
    prev.fill(0)
    
    for(let i = 1; i <= n; i++) {
        let curr = new Array(m + 1)
        curr.fill(0)
        for(let j = 1; j <=m; j++) {
            let ch1 = s[i-1], ch2 = rs[j-1]
            if(ch1 == ch2) {
                curr[j] = 1 + prev[j-1]
            } else {
                curr[j] = Math.max(prev[j],curr[j-1])
            }
        }
        prev = curr
    }
    
    return prev[m]
};