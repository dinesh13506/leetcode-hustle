/**
 * @param {string} s
 * @return {string}
 */
 var sortSentence = function(s) {
    
    let words = s.split(" ")
    let answer = new Array(words.length)
    for(let word of words) {
        let index = word[word.length-1] - 1
        word = word.slice(0,word.length-1)
        answer[index] = word
    }
    return answer.join(" ")
};