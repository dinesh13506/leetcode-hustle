/**
 * @param {string} s
 * @return {boolean}
 */
var makePalindrome = function(s) {
    
    let ops = 0
    let i = 0, j = s.length - 1
    while(i <= j) {
        if(s[i] == s[j]) {
           
        } else {
            ops += 1
        }
        i++
        j--
        if(ops > 2) {
            return false
        }
    }
    return ops > 2 ? false : true
};