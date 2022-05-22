/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    
    let n = s.length
    let result = 0
    
    let countPalindromes = function(start, end) {
        let count = 0
        while(start >=0 && end < n) {
            if(s[start] == s[end]) {
                start--
                end++
                count++
            } else {
                break
            }
        }
        return count
    }
    for(let centerIndex = 0; centerIndex < n; centerIndex++) {
        //odd length palindrome
        result += countPalindromes(centerIndex,centerIndex)
        //odd length of palindrome
        result += countPalindromes(centerIndex,centerIndex + 1)
        
    }
    return result
};