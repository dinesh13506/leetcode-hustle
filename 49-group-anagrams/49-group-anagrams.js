/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    let map = new Map()
    let sorted_strs = []
    const n = strs.length
    for(let i = 0; i < n; i++) {
        sorted_strs.push(strs[i].split('').sort().join(''))
    }
    for(let i = 0; i < n; i++) {
        if(map.has(sorted_strs[i])) {
            map.get(sorted_strs[i]).push(i)
        } else {
            map.set(sorted_strs[i], [i])
        }
    }
    
    let answer = []
    for(let key of map.keys()) {
        let index_arr = map.get(key) 
        let group = []
        for(let index of index_arr) {
            group.push(strs[index])
        }
        answer.push(group)
    }
    return answer
};