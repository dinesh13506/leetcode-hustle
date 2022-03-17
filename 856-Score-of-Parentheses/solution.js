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

// optimised solution

/**
 * @param {string} s
 * @return {number}
 */
 var scoreOfParenthesesOptimized = function(s) {
    let open = "("
    let close = ")"
    
    let balance = 0
    let answer = 0
    for(let i =0; i < s.length; i++) {
        let ch = s[i]
        if(ch === open) {
            balance++
        } else {
            balance--
            if(s[i-1] === open) {
                answer = answer + (1<<balance)
            }
        }
    }
    return answer
};