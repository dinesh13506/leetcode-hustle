/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function(nums) {
    
    while(nums.length > 1) {
        let temp = []
        for(let i = 1; i < nums.length; i++) {
            let value = (nums[i] + nums[i-1]) % 10
            temp.push(value)
        }
        nums = temp
    }
    
    return nums[0]
};