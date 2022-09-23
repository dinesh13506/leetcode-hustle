/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    
    for(let i = 0; i <= haystack.length - needle.length; i++) {
        let j = 0
        while(j < needle.length) {
            if(haystack[i+j] != needle[j]) {
                break
            }
            j++
        }
        if( j == needle.length ) return i
    }
    return -1
};