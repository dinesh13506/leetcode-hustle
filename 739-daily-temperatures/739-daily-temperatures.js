/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let stack = []
    const n = temperatures.length
    let answer = new Array(n)
    answer.fill(0)
    for(let i = 0; i < n; i++) {
        if(stack.length == 0) {
            stack.push(i)
        }
        else {
            let top = () => {
                return stack[stack.length - 1]
            }
            while(stack.length && temperatures[top()] < temperatures[i] ) {
                let days =  i - top()
                answer[top()] = days
                stack.pop()
            }
            stack.push(i)
        }
    }
    return answer
    
};