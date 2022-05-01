/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function(nums) {
    let n = nums.length
    if(n<=3) {
        return 0
    }
    nums.sort(function(a,b) {
        if(a < b) {
            return -1
        } else if(a > b) {
            return 1
        } else {
            return 0
        }
    })
    
    //cases remove all last 3 elements
    let ans = Infinity
    ans = Math.min(ans, (nums[n-4]  - nums[0]))
    //remove all there first elements
    ans = Math.min(ans, (nums[n-1] - nums[3]) )
    //remove last one and first two
    ans = Math.min(ans, (nums[n-2] - nums[2]) )
    //remove last two and first one
    ans = Math.min(ans, (nums[n-3] - nums[1]) )
    return ans
                   
};