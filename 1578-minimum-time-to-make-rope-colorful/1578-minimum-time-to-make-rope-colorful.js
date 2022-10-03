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
            stack.push([ colors[i], false , neededTime[i], neededTime[i] ])
        } else {
            let top = stack[stack.length - 1]
            let topColor = top[0]
            if(colors[i] == topColor) {
                
                top[1] = true
                top[2] += neededTime[i]
                top[3] = Math.max(top[3], neededTime[i])
            } else {
                stack.push([ colors[i], false ,neededTime[i], neededTime[i] ])
            }
        }
    }
    
    //console.log(stack)
    let ans = 0
    while(stack.length) {
        let top = stack.pop()
        if(top[1]) {
            ans += (top[2] - top[3])
        }
    }
    return ans
};