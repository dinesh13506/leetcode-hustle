/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function(s, words) {
    
    let temp = ""
    for(let w of words) {
        temp += w
        if(temp == s) {
            return true
        }
    }
    return false
};