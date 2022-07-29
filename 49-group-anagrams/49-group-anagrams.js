/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    const map = new Map()
    const n = strs.length
    for(let i = 0 ; i < n; i++) {
        let count = new Array(26)
        count.fill(0)
        for(let ch of strs[i]) {
            count[ch.charCodeAt() - 'a'.charCodeAt()]++
        }
        let key = count.join('*')
        if(map.has(key) == false) {
            map.set(key, [])
        }
        map.get(key).push(strs[i])
    }
    
    let answer = []
    for(let key of map.keys()) {
        answer.push(map.get(key))
    }
    return answer
};