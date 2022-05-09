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
    
    let backtrack = function(index, path) {
        
        if(path.length == digits.length) {
            result.push(path.join(''))
            return
        }
        
        let s = map.get(digits[index])
        for(let ch of s) {
            path.push(ch)
            backtrack(index + 1, path)
            path.pop()
        }
    }
    
    backtrack(0,[])
    return result
};