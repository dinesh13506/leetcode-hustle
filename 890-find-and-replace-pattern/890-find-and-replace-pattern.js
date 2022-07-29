/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
    
    let answer = []
    
    let match = (word) => {
        let map1 = new Map()
        for(let i = 0; i < word.length; i++) {
            let w = word[i], p = pattern[i]
            if(map1.has(w) == false) map1.set(w,p)
            if(map1.get(w) != p) return false
        }
        let seen = new Set()
        for(let key of map1.keys()) {
            if(seen.has(map1.get(key))) return false
            seen.add(map1.get(key))
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