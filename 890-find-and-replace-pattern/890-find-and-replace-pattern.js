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
        let seen = new Array(26)
        for(let key of map1.keys()) {
            let value = map1.get(key)
            let index = value.charCodeAt() - 'a'.charCodeAt()
            if(seen[index]) return false
            seen[index] = true
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