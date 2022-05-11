/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function(n) {
    
    let chars = ['a','e','i','o','u']
    
    let results = []
    let backtrack = function(index, curr) {
        
        if(curr.length == n) {
            //console.log(curr.slice())
            results.push(curr.slice().join(''))
            return
        }
        
        for(let start = index; start < 5; start++) {
            curr.push(chars[start])
            backtrack(start, curr)
            curr.pop()
        }
    }
    
    let curr = []
    backtrack(0,curr)
    return results.length
};