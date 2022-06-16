/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    
    let m = s.length
    let expandAroundIndex = (p1, p2) => {
        let len = 0
        while(p1 >=0 && p2 < m && s[p1] == s[p2]) {
            len = (p1 == p2 ) ? len + 1 : len + 2
            p1--
            p2++
        }
        return len
    }
    let start = 0, end = 0 // start and end index of longest palindromic substr
    for(let i = 0; i < m; i++) {
        //take i as center and check plaindrome of even / odd length
        let len1 = expandAroundIndex(i, i + 1) //even length
        let len2 = expandAroundIndex(i, i) //odd length
        let maxlen = Math.max(len1, len2)
        let newstart = i - parseInt((maxlen-1)/2)
        let newend = i + parseInt((maxlen)/2)
        
        if(newend - newstart > end - start) {
            start = newstart
            end = newend
        }
    }
    
    let ans = []
    while(start <= end) {
        ans.push(s[start])
        start++
    }
    return ans.join('')
    
    
};