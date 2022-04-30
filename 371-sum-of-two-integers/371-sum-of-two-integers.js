/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    //return overall ans in a
    while(b>0) {
        a++
        b--
    }
    while(b <0) {
        a--
        b++
    }
    return a
};