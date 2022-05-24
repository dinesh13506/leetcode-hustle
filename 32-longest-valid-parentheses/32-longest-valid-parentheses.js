/**
 * @param {string} s
 * @return {number}
 */

var longestValidParentheses = function(s) {
    return longestValidParenthesesWithStack(s)
   
};


var longestValidParenthesesWithStack = function(s) {
    
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


var longestValidParenthesesWithdp = function(s) {
    let n = s.length
    let dp = new Array(n)
    dp.fill(0)
    
    let max = 0
    let opening = "(", closing = ")"
    for(let i = 0; i < n; i++) {
        let ch = s[i]
        if(ch == closing) {
            if(i > 0 && s[i-1] == opening) {
                dp[i] = 2 + ( i>= 2 ? dp[i-2] : 0) 
                // for e.g ....()
                // 2 is for ()
                // dp[i-2] is length of valid substring from 0 to i-2
            }
            else if(i > 0 && s[i-1] == closing) {
                
                // ....))
                //k,previ....i-1,i
                let k = i - dp[i-1] - 2
                
                dp[i] = 2 + (  k >= 0 ? dp[k] : 0 )  + dp[i-1]
                
            }
            max = Math.max(max, dp[i])
        }
    }
    return max
}


