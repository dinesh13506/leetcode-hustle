/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let n = s.length
    let start = 0, map = new Map(), len = 0, max = 0
    while(start < n) {
        if(map.has(s[start])) {
            max = Math.max(len, max)
            len = 0
            start = map.get(s[start]) + 1
            map = new Map()
        } else {
            len++
            max = Math.max(len, max)
            map.set(s[start], start)
            start++
        }
    }
    return max
};