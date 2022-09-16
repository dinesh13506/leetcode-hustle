/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let pow = 0
    let ans = 0
    for(let i = columnTitle.length - 1; i>= 0; i--) {
        ans += (columnTitle[i].charCodeAt() - 'A'.charCodeAt() + 1 ) * Math.pow(26, pow)
        pow++
    }
    return ans
};