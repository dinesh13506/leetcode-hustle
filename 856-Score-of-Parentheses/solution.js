/**
 * @param {string} s
 * @return {number}
 */
 var scoreOfParentheses = function(s) {
    
    const open = "("
    const close = ")"
    let stack = new Array()
    for(let ch of s) {
        if(ch === open) {
            stack.push(ch)
        } else {
            let sum = 0
            while(stack.length && stack[stack.length-1] != open) {
                sum = sum + stack.pop()
            }
            stack.pop()
            stack.push(sum > 0 ? 2 * sum : 1)
        }
    }
    let answer = 0
    while(stack.length) {
        answer+=stack.pop()
    }
    return answer
};