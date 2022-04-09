/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let i = 0, j = 0, first = true, output = []
    while(i < word1.length && j < word2.length) {
        if(first) {
            output.push(word1[i])
            i++
            first = false
        } else {
            output.push(word2[j])
            j++
            first = true
        }
    }
    
    while(i < word1.length ) {
        output.push(word1[i])
        i++
    }
    while(j < word2.length) {
        output.push(word2[j])
        j++
    }
    return output.join("")
    
};