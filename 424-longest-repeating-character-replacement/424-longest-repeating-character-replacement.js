/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    
    const n = s.length
    let count = new Array(26)
    count.fill(0)
    let left = 0
    let maxcount = 0
    let ans = 0
    for(let right = 0; right < n; right++) {
        let ch = s[right]
        let index = ch.charCodeAt() - 'A'.charCodeAt()
        count[index]++
        if(maxcount < count[index]) maxcount = count[index]
        
        while(right - left + 1 - maxcount > k) {
            let ch = s[left]
            let index = ch.charCodeAt() - 'A'.charCodeAt()
            count[index]--
            left++
            maxcount = Math.max(...count)
        }
        ans = Math.max(ans, right - left + 1)
        
    }
    return ans
};