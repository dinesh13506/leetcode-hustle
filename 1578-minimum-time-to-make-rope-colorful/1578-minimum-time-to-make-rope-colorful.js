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
            stack.push([ colors[i],neededTime[i], neededTime[i] ])
        } else {
            let top = stack[stack.length - 1]
            let topColor = top[0]
            if(colors[i] == topColor) {
                
                top[1] += neededTime[i]
                top[2] = Math.max(top[2], neededTime[i])
            } else {
                stack.push([ colors[i] ,neededTime[i], neededTime[i] ])
            }
        }
    }
    
    let ans = 0
    while(stack.length) {
        let top = stack.pop()
        ans += (top[1] - top[2])
    }
    return ans
};