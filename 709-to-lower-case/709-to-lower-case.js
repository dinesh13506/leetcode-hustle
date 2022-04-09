/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    let ans = []
    for(let ch of s) {
        if(ch >= 'A' && ch<='Z') {
            let diff = ch.charCodeAt() - 'A'.charCodeAt()
            let newAscii = 'a'.charCodeAt() + diff
            ans.push(String.fromCharCode(newAscii))
        } else {
            ans.push(ch)
        }
    }
    return ans.join('')
};