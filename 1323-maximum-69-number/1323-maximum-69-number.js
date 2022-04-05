/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    //find first 6
    let s = "" + num
    let arr = s.split('')
    for(let i = 0; i< arr.length; i++) {
        if(arr[i] == '6') {
            arr[i] = '9'
            break
        }
    }
    return parseInt(arr.join(''))
};