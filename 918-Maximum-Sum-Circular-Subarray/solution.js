/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubarraySumCircular = function(nums) {
    
    let max_subarray_sum = -Infinity
    let temp_max_sum = 0
    
    let min_subarray_sum = Infinity
    let temp_min_sum = 0
    
    let total_sum = 0
    
    for(let i = 0; i < nums.length; i++) {
        temp_max_sum = temp_max_sum + nums[i]
        max_subarray_sum = Math.max(max_subarray_sum,temp_max_sum)
        temp_max_sum = temp_max_sum < 0 ? 0 : temp_max_sum
        
        temp_min_sum = temp_min_sum + nums[i]
        min_subarray_sum = Math.min(min_subarray_sum,temp_min_sum)
        temp_min_sum = temp_min_sum > 0 ? 0 : temp_min_sum
        
        total_sum = total_sum + nums[i] 
    }
    
    //all are negative, take max of all negative
    if(total_sum == min_subarray_sum ) {
        return max_subarray_sum
    } else {
        return Math.max(max_subarray_sum, total_sum - min_subarray_sum)
    }
};