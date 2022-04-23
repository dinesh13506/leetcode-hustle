/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    
    let zeroes = 0, left = 0, right = 0, max = -Infinity
    while(right < nums.length) {
        if(nums[right] == 0) {
            zeroes++
        }
        while(zeroes==2) {
            if(nums[left] == 0) {
                zeroes--
            }
            left++
        }
        max= Math.max(max, right-left+1)
        right++
    }
    return max
};