/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
  
    let stack = []
    for(let op of ops) {
        if(op == '+') {
            let len = stack.length
            let top1 = stack[len-1]
            let top2 = stack[len-2]
            stack.push(top1+top2)
        } else if(op == 'D') {
            let len = stack.length
            let top = stack[len-1]
            stack.push(2*top)
        } else if(op == 'C') {
            stack.pop()
        } else {
            stack.push(parseInt(op))
        }
    }
    let sum = 0
    while(stack.length) {
        sum += stack.pop()
    }
    return sum
};