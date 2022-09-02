/**
 * @param {number[]} nums
 * @return {number}
 */
var countSubarrays = function(nums) {
    
    let l = 0
    let total = 0
    for(let i = 0; i < nums.length; i++) {
        let prev = i > 0 ? nums[i-1] : undefined
        if(!prev) {
            l = 1
        } else if(nums[i] > prev) {
            l++
        } else {
            total = total + (l * (l + 1) / 2)
            //console.log(" l = " + l, nums[i])
            l = 1
        }
    }
    total = total + (l * (l + 1) / 2)
    return total
};