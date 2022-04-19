/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    
    let stack = []
    for(let i = nums.length-1; i >=0; i--) {
        stack.push(i)
    }
    
    
    let nge = new Array(nums.length)
    nge.fill(-1)
    for(let i = nums.length-1; i >=0; i--) {
        while(stack.length > 0 && nums[stack[stack.length-1]] <= nums[i]) {
            stack.pop()
        }
        //console.log(stack)
        nge[i] = stack.length > 0  ? nums[stack[stack.length-1]] : nge[i]
        stack.push(i)
    }
    //console.log(nge)
    return nge
};