/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(colors, neededTime) {
    
    let stack = []
    const n = colors.length
    for(let i = 0; i < n; i++) {
        if(stack.length == 0) {
            stack.push([neededTime[i], neededTime[i] ])
        } else {
            let top = stack[stack.length - 1]
            let topColor = colors[i-1]
            if(colors[i] == topColor) {
                
                top[0] += neededTime[i]
                top[1] = Math.max(top[1], neededTime[i])
            } else {
                stack.push([neededTime[i], neededTime[i] ])
            }
        }
    }
    
    let ans = 0
    while(stack.length) {
        let top = stack.pop()
        ans += (top[0] - top[1])
    }
    return ans
};