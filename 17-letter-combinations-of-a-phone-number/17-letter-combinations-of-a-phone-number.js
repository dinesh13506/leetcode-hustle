/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let result = []
    if(digits.length <= 0) {
        return result
    }
    
    let map = new Map()
    map.set('2',"abc")
    map.set('3', "def")
    map.set('4', "ghi")
    map.set('5', "jkl")
    map.set('6',"mno")
    map.set('7',"pqrs")
    map.set('8',"tuv")
    map.set('9',"wxyz")
    
    let mergeDigit = function(d) {
        let temp = []
        let s = map.get(d).split('')
        for(let ch of s) {
            for(let i = 0 ; i < result.length; i++) {
                temp.push(result[i] + ch)
            }
        }
        result = temp
    }
    result = map.get(digits[0]).split('')
    for(let i = 1; i < digits.length; i++) {
        let d = digits[i]
        mergeDigit(d)
    }
    return result
};