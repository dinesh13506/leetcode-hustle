/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {
    let aindex = -1
    let bindex = Infinity
    for(let i = 0; i <s.length; i++) {
        let ch = s[i]
        if(ch == 'a') {
            aindex = i
            if(aindex > bindex ) {
                return false
            }
        } else {
            bindex = i
            if(bindex < aindex) {
                return false
            }
        }
    }
    return true
};