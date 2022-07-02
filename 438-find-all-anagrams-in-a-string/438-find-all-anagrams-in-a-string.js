/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

let isAnagram = function(map_s,map_p) {
    
    for(let ch of map_s.keys()) {
        if(map_p.has(ch) == false || map_p.get(ch) != map_s.get(ch)) {
            return false
        }
    }
    for(let ch of map_p.keys()) {
        if(map_s.has(ch) == false || map_s.get(ch) != map_p.get(ch)) {
            return false
        }
    }
    return true
}
var findAnagrams = function(s, p) {
    
    let map_p = new Map()
    for(let ch of p) {
        map_p.set(ch , (map_p.get(ch) || 0) + 1)
    }
    
    let map_s = new Map()
    const windowSize = p.length
    for(let i = 0; i < windowSize; i++) {
        map_s.set(s[i], (map_s.get(s[i]) || 0) + 1)
    }
    
    let ans = []
    let left = 0
    for(let right = windowSize; right < s.length; right++) {
        if(isAnagram(map_s, map_p)) {
            ans.push(left)
        }
        let count = map_s.get(s[left])
        map_s.set(s[left], count - 1)
        if(map_s.get(s[left]) == 0) {
            map_s.delete(s[left])
        }
        left++
        map_s.set(s[right], (map_s.get(s[right]) || 0) + 1)
    }
    if(isAnagram(map_s, map_p)) {
        ans.push(left)
    }
    return ans
};