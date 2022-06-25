/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    
    let n = nums.length
    let operations = 0
    for(let i = 1; i < n; i++) {
        if(nums[i] < nums[i-1]) {
            if(operations == 1) {
                return false
            }
            operations++
            if(i < 2 || nums[i-2] <= nums[i]) {
                nums[i-1] = nums[i]
            } else {
                nums[i] = nums[i-1]
            }
        }
    }
    return true
};