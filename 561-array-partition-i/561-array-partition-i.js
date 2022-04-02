/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    
    let res = 0
    nums.sort(function(a,b) {return a - b})
    let length = nums.length
    let i = 0
    while(i < length) {
        let x = nums[i], y = nums[i+1]
        res += Math.min(x,y)
        i += 2
    }
    return res
};