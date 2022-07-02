/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    const n = s.length, base = 'A'.charCodeAt()
    let start = 0, end = 0, maxlen = 0, maxfreq = 0
    let freq = new Array(26)
    freq.fill(0)
    for(end =0; end < n; end++) {
        let freqIndex = s[end].charCodeAt() - base
        freq[freqIndex]++
        maxfreq = Math.max(maxfreq, freq[freqIndex])
        
        while(end - start + 1 - maxfreq > k) {
            let index = s[start].charCodeAt() - base
            freq[index]--
            start++
        }
        maxlen = Math.max(maxlen, end - start + 1)
    }
    return maxlen
};