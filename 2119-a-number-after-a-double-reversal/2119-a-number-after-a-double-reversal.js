/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
  
    let s = "" + num
    if(s == "0" || s[s.length-1] != '0') {
        return true
    }
    return false
};