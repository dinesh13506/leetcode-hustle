/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    
    let dp = new Array(nums.length)
    dp.fill(-1)
    //top down
    
    let rob = function(index) {
        if(index == 0) {
            return nums[index]
        }
        if(index < 0) {
            return 0
        }
        if(dp[index] == -1) {
            let take = nums[index] + rob(index-2)
            let nottake = rob(index-1)
            dp[index] = Math.max(take,nottake)
        }
        return dp[index]
    }
    return rob(nums.length-1)
};