/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    
    let length = s.length, i = 0, c = 0
    while(i < length) {
        if(s[i] != ' ') {
            while(i < length && s[i] != ' ') {
                i++
            }
            c++
        }
        i++
    }
    return c
};