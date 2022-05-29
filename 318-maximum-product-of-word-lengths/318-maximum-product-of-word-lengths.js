/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
    
    let lengthMap = new Map()
    let masterMap = new Map()
    //set freq of all words
    for(let word of words) {
        //skip duplicate words
        if(masterMap.has(word)) {
            continue
        }
        lengthMap.set(word, word.length)
        let map = new Map()
        masterMap.set(word, map)
        for(let ch of word) {
            map.set(ch, (map.get(ch) || 0) + 1)
        }
    }
    
    let ans = 0
    let n = words.length
    
    
    let checkCommonChars = function(word1, word2) {
        let map1 = masterMap.get(word1)
        let map2 = masterMap.get(word2)
        for(let ch of word1) {
            if(map2.get(ch) >= 1) {
                return true
            }
        }
        for(let ch of word2) {
            if(map1.get(ch) >= 1) {
                return true
            }
        }
        return false
    }
    for(let i = 0; i < n; i++) {
        for(let j = i + 1; j < n; j++) {
            if(checkCommonChars(words[i], words[j]) == false) {
                ans = Math.max(ans, lengthMap.get(words[i]) * lengthMap.get(words[j]))
            }
        }
    }
    return ans
    
};