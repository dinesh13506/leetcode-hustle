/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    
    let i = 0, j = nums.length - 1
    while(i <= j) {
        if(nums[i] % 2 != 0 && nums[j] %2 == 0) {
            let temp = nums[i]
            nums[i] = nums[j]
            nums[j] = temp
            i++
            j--
        }
        else if(nums[i] % 2 == 0 && nums[j] %2 == 0) {
            i++
        }
        else if(nums[i] % 2 != 0 && nums[j] %2 != 0) {
            j--
        } else {
            i++
            j--
        }
    }
    return nums
};