/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    
    let ispalindrome = function(word) {
        let i = 0, j = word.length -1
        while(i <= j) {
            if(word[i] != word[j]) {
                return false
            }
            i++
            j--
        }
        return true
    }
    
    for(let word of words) {
        if(ispalindrome(word)) return word
    }
    return ""
};