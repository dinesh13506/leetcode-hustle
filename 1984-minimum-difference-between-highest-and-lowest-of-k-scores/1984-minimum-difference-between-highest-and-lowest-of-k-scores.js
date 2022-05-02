/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
    
    nums.sort(function(a,b) {
        if(a < b) {
            return -1
        } else if(a > b) {
            return 1
        } else {
            return 0
        }
    })
    //console.log(nums)
    let min = Infinity
    let max = -Infinity
    for(let i = 0; i < k; i++) {
        min = Math.min(min, nums[i])
        max = Math.max(max,nums[i])
    }
    let diff = max - min
    for(let right = k; right < nums.length; right++) {
        max = nums[right]
        min = nums[right-k + 1]
        //console.log(right-k, right,max,min)
        diff = Math.min(diff, max - min)
    }
    return diff
};