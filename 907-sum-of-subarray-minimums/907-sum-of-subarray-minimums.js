/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(nums) {
    
    let mod = 1e9 + 7;
    let stack = new Array()
    let previousSmallerElement = new Array(nums.length)
    for(let i = 0; i < nums.length; i++) {
        previousSmallerElement[i] = i + 1
    }
    
    for(let i = 0; i < nums.length; i++) {
        while(stack.length && nums[stack[stack.length-1]] >= nums[i]) {
            stack.pop()
        }
        previousSmallerElement[i] = stack.length ? i - stack[stack.length-1] : previousSmallerElement[i]
        stack.push(i)
    }
    //console.log(nums)
    //console.log(previousSmallerElement)
    stack = new Array()
    let nextSmallerElement = new Array(nums.length)
    for(let i = nums.length-1; i >=0 ; i--) {
        nextSmallerElement[i] = nums.length - i
    }
    
    for(let i = nums.length - 1; i >=0 ; i--) {
       while(stack.length && nums[stack[stack.length-1]] > nums[i]) {
           stack.pop()
       }
       nextSmallerElement[i] = stack.length ? stack[stack.length-1] - i : nextSmallerElement[i]
       stack.push(i)
    }
    //console.log(nextSmallerElement)
    let ans = 0
    for(let i = 0; i < nums.length; i++) {
        ans = (ans + (previousSmallerElement[i] * nextSmallerElement[i] * nums[i]) ) % mod
    }
    return ans
    
    
};