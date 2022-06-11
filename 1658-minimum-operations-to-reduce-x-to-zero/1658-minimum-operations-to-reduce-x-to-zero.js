/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function(nums, x) {
    
    let n = nums.length
    let sum = 0
    for(let num of nums) {
        sum += num
    }
    let target = sum - x //longest subarray with sum == target
    let left = 0
    let maxi = -1
    let currWindowSum = 0
    for(let right = 0; right < n; right++) {
        currWindowSum += nums[right]
        while(currWindowSum > target && left <= right) {
            currWindowSum = currWindowSum - nums[left]
            left++
        }
        if(currWindowSum == target) {
            maxi = Math.max(maxi, right - left + 1)
        }
    }
    return maxi != -1 ? (n - maxi) : -1
};