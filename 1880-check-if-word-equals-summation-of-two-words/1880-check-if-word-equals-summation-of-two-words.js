/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function(firstWord, secondWord, targetWord) {
    
    let convertToNum = function(s) {
        let arr = []
        for(let ch of s) {
            arr.push(ch.charCodeAt() - 97)
        }
        return parseInt(arr.join(''))
    }
    let num1 = convertToNum(firstWord)
    let num2 = convertToNum(secondWord)
    let num3 = convertToNum(targetWord)
    return (num1 + num2) == num3
};