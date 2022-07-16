/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isConsecutive = function(nums) {
    
    nums.sort((a,b) => { return a - b })
    let start = nums[0]
    let end = start + nums.length - 1
    for(let i = 1; i < nums.length; i++) {
        let prev = nums[i-1]
        if(nums[i] == nums[i-1] + 1) {
            continue
        } else {
            return false
        }
    }
    
    let last = nums[nums.length-1]
    return last == end ? true : false
};