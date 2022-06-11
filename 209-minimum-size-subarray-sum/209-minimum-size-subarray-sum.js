/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    
    let n = nums.length
    let left = 0
    let mini = Infinity
    let sum = 0
    for(let right = 0; right < n; right++) {
        sum = sum + nums[right]
        while(left <=right && sum > target) {
            mini = Math.min(mini, right - left + 1)
            sum = sum - nums[left]
            left++
        }
        if(sum == target) {
            mini = Math.min(mini, right - left + 1)
        }
    }
    return mini == Infinity ? 0 : mini
};