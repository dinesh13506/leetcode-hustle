/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let freqmap = new Map()
    for(let ch of magazine) {
        let count = freqmap.get(ch) || 0
        count++
        freqmap.set(ch, count)
    }
    for(let ch of ransomNote) {
        if(freqmap.has(ch) == false || freqmap.get(ch) <= 0) {
            return false
        } else {
            let count = freqmap.get(ch) 
            count--
            freqmap.set(ch, count)
        }
    }
    return true
};