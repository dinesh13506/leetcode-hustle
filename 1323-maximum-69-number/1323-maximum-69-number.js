/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    
    let s = num.toString().split('')
    for(let i = 0; i < s.length; i++) {
        if(s[i] == '6') {
            s[i] = '9'
            break
        } 
    }
    return parseInt(s.join(''))
};