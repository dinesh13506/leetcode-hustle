/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function(patterns, word) {
    
    let ans = 0
    for(let p of patterns) {
        if(word.includes(p)) ans++
    }
    return ans
};