/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    nums.sort(function(a,b) { return a - b })
    
    let p1 = nums[0] * nums[1] * nums[nums.length-1]
    let p2 = nums[nums.length-1] * nums[nums.length-2] * nums[nums.length-3]
    
    return Math.max(p1,p2)
};