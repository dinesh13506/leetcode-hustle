/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    
    let maxSubArray = nums[0]
    let currSubArray = nums[0]
    for(let i = 1; i < nums.length; i++) {
        currSubArray = Math.max(nums[i], nums[i] + currSubArray)
        maxSubArray = Math.max(maxSubArray,currSubArray)
    }
    
    return maxSubArray
};