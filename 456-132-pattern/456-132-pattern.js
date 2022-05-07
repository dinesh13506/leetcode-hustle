/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
    let stack = [], secondHighest = -Infinity
    for(let i = nums.length-1; i>=0 ; i--) {
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