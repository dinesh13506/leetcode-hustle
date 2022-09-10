/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    
    let count = k
    let stack = []
    for(let ch of num) {
        while(stack.length && count && parseInt(stack[stack.length-1]) > parseInt(ch)) {
            stack.pop()
            count--
        }
        stack.push(ch)
    }
    while(count) {
        stack.pop()
        count--
    }
    let leading = true
    let ans = []
    for(let ch of stack) {
        if(leading && ch == '0') continue
        leading = false
        ans.push(ch)
    }
    if(ans.length == 0) return "0"
    return ans.join('')
};