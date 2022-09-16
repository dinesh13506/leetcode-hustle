/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let ans = []
    while(columnNumber > 0) {
        let curr = (columnNumber -1) % 26
        let ch = String.fromCharCode(curr + 'A'.charCodeAt())
        ans.push(ch)
        columnNumber = parseInt((columnNumber -1) / 26)
    }
    return ans.reverse().join('')
};