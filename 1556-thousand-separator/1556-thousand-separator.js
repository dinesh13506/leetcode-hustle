/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function(n) {
    let s = n.toString()
    let ans = []
    let stack = []
    let count = 0
    for(let i = s.length - 1; i >=0; i--) {
        stack.push(s[i])
        count++
        if(count == 3) {
            stack.push('.')
            count = 0
        }
    }
    if(stack && stack[stack.length-1] == '.') {
        stack.pop()
    }
    
    return stack.reverse().join('')
};