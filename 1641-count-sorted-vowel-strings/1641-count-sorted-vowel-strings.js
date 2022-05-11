/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function(n) {
    
    let chars = ['a','e','i','o','u']
    
    let count = 0
    let backtrack = function(index, curr) {
        
        if(curr.length == n) {
            //console.log(curr.slice())
            count++
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
    return count
};