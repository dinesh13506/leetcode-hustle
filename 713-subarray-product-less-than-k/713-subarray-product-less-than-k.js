/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    let count = 0
    if(k<1) {
        return count
    }
    let length = nums.length, product = 1, left = 0
    for(let right = 0 ; right < length; right++) {
        product *= nums[right]
        while(product >= k) {
            product = parseInt(product / nums[left])
            left++
        }
        count += (right - left) + 1
    }
    return count < 0 ? 0 : count
};