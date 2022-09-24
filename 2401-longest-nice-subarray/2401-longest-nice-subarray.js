/**
 * @param {number[]} nums
 * @return {number}
 */
var longestNiceSubarray = function(nums) {
    
    let ans = 0, p1 = 0
    let len = 0
    for(let p2 = 0; p2 < nums.length; p2++) {
        while((ans & nums[p2]) > 0) {
            ans = ans ^ nums[p1]
            p1++
        }
        ans = ans | nums[p2]
        len = len < (p2-p1 + 1) ? (p2-p1 + 1) : len
    }
    return len
};