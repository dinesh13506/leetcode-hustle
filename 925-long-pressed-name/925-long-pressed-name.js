/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    
    let i = 0, j = 0
    while(j < typed.length) {
        if(name[i] == typed[j]) {
            i++
        } else if(j == 0 || typed[j-1] != typed[j]) {
            return false
        }
        j++
    }
    return i == name.length
};