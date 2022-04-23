/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(wordsDict, word1, word2) {
    let lastIdxw1 = -1, lastIdxw2 = -1, distance = Infinity
    for(let i = 0; i < wordsDict.length; i++) {
        let w = wordsDict[i]
        if(w === word1) {
            if(lastIdxw2 >= 0) {
                distance = Math.min(distance, Math.abs(i-lastIdxw2))
            }
            lastIdxw1 = i
        } else if( w === word2) {
            if(lastIdxw1 >= 0) {
                distance = Math.min(distance, Math.abs(i-lastIdxw1))
            }
            lastIdxw2 = i
        }
    }
    return distance
};