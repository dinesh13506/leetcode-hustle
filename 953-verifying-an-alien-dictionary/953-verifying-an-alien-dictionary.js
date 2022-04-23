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
   
    for(let i = 0; i < words.length - 1; i++) {
        let curr = words[i]
        let next = words[i+1]
        for(let j = 0; j < curr.length; j++) {
            if(j >= next.length) {  return false }
            if(curr[j] == next[j]) {
                continue
            } else {
                if(map.get(curr[j]) > map.get(next[j])) {  return false }
                else { break }
            }
        }
    }
    return true
};