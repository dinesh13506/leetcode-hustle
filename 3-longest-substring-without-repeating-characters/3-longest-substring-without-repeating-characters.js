/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let n = s.length
    let map = new Map()
    let max = 0
    let start = 0, end = 0
    while(end < n) {
        map.set(s[end], (map.get(s[end]) || 0) + 1)
        while(map.get(s[end]) > 1) {
            map.set(s[start], map.get(s[start]) - 1)
            start++
        }
        max = Math.max(max, end - start + 1)
        end++
    }
    return max
};