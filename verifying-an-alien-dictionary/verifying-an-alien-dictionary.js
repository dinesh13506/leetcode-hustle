/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    
    let map = new Map()
    for(let i = 0; i < order.length; i++) {
        map.set(order[i],i)
    }
    let copy = words.slice()
    copy.sort(function(s1,s2) {
        if(s1 == s2) {
            return 0
        }
        else {
            let len = Math.min(s1.length,s2.length)
            for(let i = 0; i < len; i++) {
                if(map.get(s1[i]) == map.get(s2[i])) {
                    continue
                }
                else if(map.get(s1[i]) < map.get(s2[i])) {
                    return -1
                } else {
                    return 1
                }
            }
            if(s1.length < s2.length) {
                return -1
            } else {
                return 1
            }
        }
    })
    //console.log(map)
    //console.log(copy)
    
    for(let i = 0; i < words.length; i++) {
        if(copy[i] != words[i]) return false
    }
    return true
};