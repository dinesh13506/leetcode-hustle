/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
    
    let stack = []
    let secondHighest = -Infinity //relative to top of stack
    for(let i = nums.length - 1; i >= 0; i--) {
        
        //stack maintains 32 , we need to check 1
        if(nums[i] < secondHighest) {
            return true
        }
        while(stack.length > 0 && nums[i] > stack[stack.length-1]) {
            secondHighest = stack.pop()
        }
        stack.push(nums[i])
    }
    
    return false
    
};