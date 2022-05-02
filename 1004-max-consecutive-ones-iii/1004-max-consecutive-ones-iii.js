/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    
    let length = nums.length
    let left = 0, ones = 0, zeroes = 0, ans = -Infinity
    for(let right = 0; right < length; right++) {
        nums[right] == 0 ? zeroes++ : ones++
        //console.log("counts ", zeroes, ones)
        while(zeroes > k) {
            if(nums[left] == 0) {
                zeroes--
            } else {
                ones--
            }
            left++
        }
        //console.log("counts ", zeroes, ones)
        //console.log("pointers", left,right)
        ans = Math.max(ans, (right - left) + 1)
    }
    return ans
};