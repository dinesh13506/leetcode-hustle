/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let map = new Array(26)
    map.fill(0)
    for(let ch of magazine) {
        let idx = ch.charCodeAt() - 'a'.charCodeAt()
        map[idx]++
    }
    for(let ch of ransomNote) {
        let idx = ch.charCodeAt() - 'a'.charCodeAt()
        if(map[idx] <= 0) {
            return false
        } else {
            map[idx]--
        }
    }
    return true
};