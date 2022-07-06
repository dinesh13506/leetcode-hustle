/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    let map = new Map()
    let n = strs.length
    for(let str of strs) {
        let prefix = ""
        for(let ch of str) {
            prefix += ch
            if(map.has(prefix) == false) {
                map.set(prefix, 0)
            } 
            map.set(prefix, map.get(prefix) + 1)
        }
    }
    let ans = ""
    for(let str of map.keys()) {
        if(map.get(str) >= n) {
            if(ans.length < str.length) {
                ans = str
            }
        }
    }
    return ans
};