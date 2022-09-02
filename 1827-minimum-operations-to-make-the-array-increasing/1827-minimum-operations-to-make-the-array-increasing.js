/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let ops = 0
    for(let i = 1; i < nums.length; i++) {
        let prev = nums[i-1]
        if(prev < nums[i]) continue
        else {
            let diff = prev - nums[i]
            ops = ops + diff + 1
            nums[i] = nums[i] + diff + 1
        }
    }
    return ops
};