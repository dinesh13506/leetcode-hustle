/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    
    let str = (n >>>0).toString(2).padStart(32,'0')
   // console.log(str)
    let rev = str.split('').reverse().join('')
    //console.log(rev)
    return parseInt(rev,2)
};