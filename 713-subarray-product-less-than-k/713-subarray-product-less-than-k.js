/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    
    let count = 0
    for(let i = 0; i < nums.length; i++) {
        let product = 1
        for(let j = i; j < nums.length; j++) {
            product = product * nums[j]
            if(product < k) {
                count++
            } else {
                break
            }
        }
    }
    return count
};