/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function(firstWord, secondWord, targetWord) {
    
    let convertToNum = function(s) {
        let num = 0
        let p = 0
        for(let i = s.length-1; i >=0; i--) {
            num = num + Math.pow(10,p)*(s[i].charCodeAt()-97)
            p++
        }
        return num
    }
    let num1 = convertToNum(firstWord)
    let num2 = convertToNum(secondWord)
    let num3 = convertToNum(targetWord)
    return (num1 + num2) == num3
};