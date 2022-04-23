/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    
    let left = 0, right = 0, max = 0, zeroes = 0
    while(right < nums.length) {
        if(nums[right] == 0) {
            zeroes++
        }
        while(zeroes!=0) {
            if(nums[left] == 0) {
                zeroes--
            }
            left++
        }
        max = Math.max(max,right-left+1)
        right++
    }
    return max
};