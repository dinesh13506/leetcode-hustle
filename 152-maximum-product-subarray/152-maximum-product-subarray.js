/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let len = nums.length
    if(len ===0) return 0
    let max_so_far = nums[0]
    let min_so_far = nums[0]
    let result = max_so_far
    for(let i = 1; i < len; i++) {
        let current = nums[i]
        let temp_max = Math.max(current, Math.max(max_so_far*current, min_so_far * current))
        min_so_far = Math.min(current, Math.min(max_so_far*current, min_so_far * current))
        max_so_far = temp_max
        result = Math.max(max_so_far, result)
    }
    return result
};