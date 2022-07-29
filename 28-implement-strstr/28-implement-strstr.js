/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle.length <= 0) {
        return 0
    }
    
    for(let i = 0; i < haystack.length; i++) {
        if(haystack[i] == needle[0]) {
            let start = i, len = needle.length
            if(start + len > haystack.length) {
                break
            }
            let end = len + start - 1
            //console.log(start, end)
            let p1 = 0, p2 = needle.length -1
            let hasfound = true
            while(start <= end) {
                if(haystack[start] == needle[p1] && haystack[end] == needle[p2]) {
                    start++
                    end--
                    p1++
                    p2--
                } else {
                    hasfound = false
                    break
                }
            }
            if(hasfound) {
                return i
            }
        }
    }
    return -1
};