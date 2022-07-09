/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function(words) {
    
    let map = new Map()
    let unpaired = 0
    let ans = 0
    for(let w of words) {
        if(w[0] == w[1]) {
            if(map.has(w) && map.get(w) > 0) {
                ans = ans + 4
                map.set(w, map.get(w) - 1)
                unpaired--
            } else {
                map.set(w,(map.get(w) || 0) + 1)
                unpaired++
            }
        } else {
            let reverse_w = w[1] + w[0]
            if(map.has(reverse_w) && map.get(reverse_w) > 0) {
                ans = ans + 4
                map.set(reverse_w, map.get(reverse_w) - 1)
            } else {
                map.set(w,(map.get(w) || 0) + 1)
            }
        }
    }
    if(unpaired > 0) {
        ans = ans + 2
    }
    return ans
};