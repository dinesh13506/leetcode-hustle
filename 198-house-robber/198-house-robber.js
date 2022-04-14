/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let prevprev = 0
    let prev = nums[0]
    for(let i = 2; i <= nums.length; i++) {
        let value = Math.max(nums[i-1] + prevprev, prev)
        prevprev = prev
        prev = value
    }
    return prev
};