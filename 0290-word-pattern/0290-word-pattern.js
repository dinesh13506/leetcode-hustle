/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    s = s.split(' ');
    if(pattern.length != s.length) return false
    const n = s.length;
    let map = new Map()
    for(let i = 0; i < n; i++) {
        if(map.has(s[i])) {
            
            if(map.get(s[i]) == pattern[i]) continue
            else return false
        }
        map.set(s[i], pattern[i]);
    }
    map = new Map()
    for(let i = 0; i < n; i++) {
        if(map.has(pattern[i])) {
            
            if(map.get(pattern[i]) == s[i]) continue
            else return false
        }
        map.set(pattern[i], s[i]);
    }
    return true;
};