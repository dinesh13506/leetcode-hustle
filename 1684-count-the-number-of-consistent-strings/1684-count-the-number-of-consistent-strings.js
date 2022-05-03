/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let map = new Map()
    for(let ch of allowed) {
        let count = map.get(ch) || 0
        count++
        map.set(ch,count)
    }
    let count = words.length
    for(let word of words) {
        for(let ch of word) {
            if(map.has(ch) == false) {
                count--
                break
            }
        }
    }
    return count
};