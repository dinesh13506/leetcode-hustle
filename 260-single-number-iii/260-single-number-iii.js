/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let n = nums.length
    nums.sort((a,b) => { return a - b })
    let stack = []
    stack.push(nums[0])
    for(let i = 1; i < n; i++) {
        let top = stack[stack.length-1]
        if(top == nums[i]) {
            stack.pop()
        } else {
            stack.push(nums[i])
        }
    }
    return stack
};