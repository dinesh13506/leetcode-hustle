/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    
    let words = s.split(' ')
    let reverse = function(word) {
        let arr = word.split('')
        let i = 0, j = arr.length
        while(i <= j) {
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
            i++
            j--
        }
        return arr.join('')
    }
    for(let i = 0; i < words.length; i++) {
        words[i] = reverse(words[i])
    }
    return words.join(' ')
};