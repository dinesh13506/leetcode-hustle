/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    
    const mapping = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    
    let map = {}
    for( let word of words) {
        let t = ""
        for( let ch of word ) {
            let asc = ch.charCodeAt() - 97
            let value = mapping[asc]
            t = t + value
        }
        map[t] = true
    }
    
    let result = 0
    for(let [ key, value] of Object.entries(map)) {
        result++
    }
    return result
};