/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function(s) {
    
    let ispalindrome = function() {
        let i = 0, j = s.length - 1
        while(i <= j) {
            if(s[i] != s[j]) return false
            i++
            j--
        }
        return true
    }
    
    if(ispalindrome()) {
        return 1
    } else {
        return 2
    }
};