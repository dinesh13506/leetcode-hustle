/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    
    let map = new Map()
    for(let ch of s) {
        map.set(ch, 1 + (map.get(ch) || 0))
    }
    
    let ans = 0
    for(let ch of map.keys()) {
        let count = map.get(ch)
        ans = ans + (count * (count + 1) / 2)
    }
    return ans
};