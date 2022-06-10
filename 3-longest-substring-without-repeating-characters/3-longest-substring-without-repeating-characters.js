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
        let endChar = s[end]
        map.set(endChar, (map.get(endChar) || 0) + 1)
        while(map.get(endChar) > 1) {
            let startChar = s[start]
            map.set(startChar, map.get(startChar) - 1)
            start++
        }
        max = Math.max(max, end - start + 1)
        end++
    }
    return max
};