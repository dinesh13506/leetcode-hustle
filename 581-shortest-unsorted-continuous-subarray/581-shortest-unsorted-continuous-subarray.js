/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    
    let stack = []
    let left = Infinity, right = -Infinity
    for(let i = 0; i < nums.length; i++) {
        while(stack.length > 0 && nums[stack[stack.length -1]] > nums[i]) {
            left = Math.min(left, stack.pop())
        }
        stack.push(i)
    }
    
    while(stack.length) stack.pop()
    
    for(let j = nums.length - 1; j >=0; j--) {
        while(stack.length > 0 && nums[stack[stack.length -1]] < nums[j]) {
            right = Math.max(right, stack.pop())
        }
        stack.push(j)
    }
    if(left > right) {
        return 0
    }
    return right - left + 1
};