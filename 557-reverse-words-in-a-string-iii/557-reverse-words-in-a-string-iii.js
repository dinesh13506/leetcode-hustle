/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    
    let ans = []
    let words = s.split(" ")
    for(let w of words) {
        w = w.split('').reverse().join('')
        ans.push(w)
    }
    return ans.join(" ")
}