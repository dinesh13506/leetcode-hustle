/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    nums.sort((a,b) => { return a - b});
    const n = nums.length;
    return (nums[n-1] - 1) * (nums[n-2] - 1);
};