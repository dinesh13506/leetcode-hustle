/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    
    for(let i = 0; i <= haystack.length - needle.length; i++) {
        let found = true
        let j = 0
        while(j < needle.length) {
            if(haystack[i+j] != needle[j]) {
                found = false
                break
            }
            j++
        }
        if(found) return i
    }
    return -1
};