/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    
    let map = new Map()
    for(let ch of s) {
        map.set(ch, (map.get(ch) || 0) + 1)
    }
    
    let len = 0, flag = false
    for(let key of map.keys()) {
        if(map.get(key) % 2 == 0) {
            len = len + map.get(key)
        }
        else if(flag == false) {
            len = len + map.get(key)
            flag = true
        } else { 
            len = len + map.get(key) -1
        }
    }
    return len
};