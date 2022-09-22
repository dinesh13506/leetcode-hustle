/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let ans = []
    while(columnNumber > 0) {
        columnNumber--
        ans.push(String.fromCharCode(columnNumber % 26 + 'A'.charCodeAt()))
        columnNumber = parseInt(columnNumber / 26)
    }
    return ans.reverse().join('')
};