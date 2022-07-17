/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    
    let n = nums.length
    let result = nums[0]
    let min_so_far = nums[0]
    let max_so_far = nums[0]
    for(let i = 1; i < n; i++) {
        let newMax = Math.max(max_so_far * nums[i], min_so_far * nums[i], nums[i])
        let newMin = Math.min(max_so_far * nums[i], min_so_far * nums[i], nums[i])
        min_so_far = newMin
        max_so_far = newMax
        result = Math.max(result, max_so_far)
        
    }
    return result
};