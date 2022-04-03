/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var twoSumLessThanK = function(nums, k) {
    nums.sort(function(a,b) { return a - b })
    let i = 0, j = nums.length-1, ans = -1
    while(i < j) {
        let x = nums[i], y = nums[j]
        if(x+y < k) {
            ans = Math.max(ans,x+y)
            i++
        } else {
            j--
        }
    }
    return ans
};