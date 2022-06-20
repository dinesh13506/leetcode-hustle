/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    
    let ans = []
    let temp = []
    
    let backtrack = function(temp, open, close) {
        
        if(temp.length == 2 * n) {
            ans.push(temp.join(''))
            return
        }
        
        if(open < n) {
            temp.push('(')
            backtrack(temp, open+1, close)
            temp.pop()
        }
        if(close < open) {
            temp.push(')')
            backtrack(temp, open, close + 1)
            temp.pop()
        }
    }
    
    backtrack(temp,0, 0)
    return ans
};