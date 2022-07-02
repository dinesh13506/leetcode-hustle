/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
    const n = s.length
    let start = 0, end = 0, maxlen = 0, uniqueChars = 0
    let freq = new Map()
    for(end = 0; end < n; end++) {
        let count = freq.get(s[end]) || 0
        count++
        freq.set(s[end], count)
        let distinctChars = freq.size // get map size
        while(distinctChars > k) {
            let count = freq.get(s[start])
            count--
            if(count == 0) {
                freq.delete(s[start])
            } else {
                freq.set(s[start], count)
            }
            start++
            distinctChars = freq.keys().length
        }
        maxlen = Math.max(maxlen, end - start + 1)
    }
    return maxlen
};