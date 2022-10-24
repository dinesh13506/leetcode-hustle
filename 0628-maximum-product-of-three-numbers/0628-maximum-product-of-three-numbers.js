/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    nums.sort((a,b) => { return a - b;})
    const n = nums.length;
    let ans1 = nums[n-1] * nums[n-2] * nums[n-3];
    let ans2 = nums[0] * nums[1] * nums[n-1];
    return ans1 > ans2 ? ans1 : ans2;
};