/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
    
    let words = sentence.split(' ')
    let n = words.length
    
    let isPrefix = (word) => {
        if(word.length < searchWord.length) {
            return false
        }
        let i = 0
        while( i < searchWord.length) {
            if(word[i] == searchWord[i]) {
                i++
                continue
            }
            return false
        }
        return true
    }
    
    for(let i = 0; i < n; i++) {
        if(isPrefix(words[i])) {
            return i + 1
        }
    }
    return -1
};