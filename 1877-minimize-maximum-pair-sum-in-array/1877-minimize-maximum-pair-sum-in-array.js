/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    
    nums.sort(function(a,b) {
        if(a < b) {
            return -1
        } else if(a == b) {
            return 0
        } else {
            return 1
        }
    })
    
    let left = 0, right = nums.length - 1
    let ans = -Infinity
    while(left < right) {
        ans = Math.max(ans, nums[left] + nums[right])
        left++
        right--
    }
    return ans
};