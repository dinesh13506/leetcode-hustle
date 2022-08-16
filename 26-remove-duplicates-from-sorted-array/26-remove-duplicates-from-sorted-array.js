/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
    let i = -1, j = 0
    const n = nums.length
    while(j < n) {
        if(i < 0) {
            i++
            nums[i] = nums[j]
            j++
        } else {
            if(nums[i] == nums[j]) {
                j++
            } else {
                i++
                nums[i] = nums[j]
                j++
            }
        }
    }
    //console.log(i, nums)
    return i + 1
};