/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    
    let map = {
        '2' : "abc",
        '3' : "def",
        '4' : "ghi",
        '5' : "jkl",
        '6' : "mno",
        '7' : "pqrs",
        '8' : "tuv",
        '9' : "wxyz"
    }
    if(digits.length == 0) {
        return []
    } else if(digits.length == 1) {
        return map[digits[0]].split('')
    }
    let temp = map[digits[0]].split('')
    for(let i = 1; i < digits.length; i++) {
        let res = []
        for(let ch1 of temp) {
            for(let ch2 of map[digits[i]].split('')) {
                res.push(ch1+ch2)
            }
        }
        temp = res
    }
    return temp
};