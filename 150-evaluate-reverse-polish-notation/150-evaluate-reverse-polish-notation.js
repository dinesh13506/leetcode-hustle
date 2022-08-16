/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    
    let stack = []
    let set = new Set()
    set.add('+')
    set.add('-')
    set.add('*')
    set.add('/')
    for(let token of tokens) {
        if(set.has(token)) {
            let op2 = stack.pop()
            let op1 = stack.pop()
            switch(token) {
                case '+' :
                    stack.push(op1 + op2)
                    break
                case '-' :
                    stack.push(op1 - op2)
                    break
                case "*":
                    stack.push(op1 * op2)
                    break
                case '/':
                    stack.push(parseInt(op1 / op2))
                    break
            }
        } else {
            stack.push(parseInt(token))
        }
    }
    return stack.pop()
};