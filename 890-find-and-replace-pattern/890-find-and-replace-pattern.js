/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
    
    let answer = []
    
    let match = (word) => {
        let map1 = new Map()
        let map2 = new Map()
        for(let i = 0; i < word.length; i++) {
            let w = word[i], p = pattern[i]
            if(map1.has(w) == false) map1.set(w,p)
            if(map2.has(p) == false) map2.set(p,w)
            if(map1.get(w) != p || map2.get(p) != w) return false
        }
        return true
    }
    for(let word of words) {
        if(match(word, pattern)) {
            answer.push(word)
        }
    }
    return answer
};