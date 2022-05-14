/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
    
    let n = s.length
    let revs = s.split('').reverse().join('')
    let prev = new Array(n + 1)
    prev.fill(0)
    for(let i = 1; i <=n; i++) {
        let curr = new Array(n + 1)
        curr.fill(0)
        for(let j = 1; j <=n ; j++) {
            let ch1 = s[i-1], ch2 = revs[j-1]
            if(ch1 === ch2) {
                curr[j] = 1 + prev[j-1]
            } else {
                curr[j] = Math.max(prev[j],curr[j-1])
            }
        }
        prev = curr
    }
    
    return n - prev[n]
    
};