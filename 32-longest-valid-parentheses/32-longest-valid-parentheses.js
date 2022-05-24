/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    
    let n = s.length
    let open = 0 , close = 0, max = 0
    for(let ch of s) {
        if(ch == '(') {
            open++
        } else {
            close++
        }
        
        if(open == close) {
            let len = open + close
            max = Math.max(len, max)
        } else if(close > open) {
            open = 0
            close = 0
        }
    }
    
    open = 0, close = 0
    
    for(let i = n-1; i >=0 ; i--) {
        let ch = s[i]
        if(ch == '(') {
            open++
        } else {
            close++
        }
        
        if(open == close) {
            let len = open + close
            max = Math.max(len, max)
        } else if(close < open) {
            open = 0
            close = 0
        }
    }
    return max
};