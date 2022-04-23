/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    
    // base case
    if( s == null || s.length <= 1 ) {
        return s
    }
    
    let start = 0
    let end = 0
    
    for( let i = 0; i < s.length; i++) {
        let len1 = expandAroundCenter(s,i,i)
        let len2 = expandAroundCenter(s,i,i+1)
        let maxLen = Math.max(len1,len2)
        if(maxLen > end - start) {
            start = i - parseInt((maxLen-1)/2)
            end = i + parseInt(maxLen/2)
        }
    }
    
    let ans = ""
    for(let k = start; k<=end; k++) {
        ans = ans + s[k]
    }
    return ans
};


let expandAroundCenter = function(s,start,end) {
    
    while( start >=0 && end < s.length && s[start] == s[end]) {
        start--
        end++
    }
    return end - start - 1
    
}