/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
    
    let max = 0
    let sum = 0
    for(let i = 0; i < nums.length; i++) {
        let prev = i > 0 ? nums[i-1] : undefined
        if(!prev) {
            sum = sum + nums[i]
        } else if(nums[i] > prev) {
            sum = sum + nums[i]
        } else {
            max = Math.max(sum, max)
            sum = nums[i]
        }
    }
    max = Math.max(sum, max)
    return max
};