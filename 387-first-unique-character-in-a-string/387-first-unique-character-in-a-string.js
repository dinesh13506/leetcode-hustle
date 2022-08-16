/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const total = 26
    let countmap = new Array(total)
    countmap.fill(0)
    
    for(let ch of s) {
        let idx = ch.charCodeAt() - 'a'.charCodeAt()
        countmap[idx]++
    }
    for(let i = 0; i < s.length; i++) {
        let ch = s[i]
        let idx = ch.charCodeAt() - 'a'.charCodeAt()
        if(countmap[idx] == 1) {
            return i
        }
    }
    return -1
    
};