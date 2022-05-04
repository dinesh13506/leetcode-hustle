/**
 * @param {number[]} nums
 * @return {number}
 */
var robTopDown = function(nums) {
    
    let dp = new Array(nums.length)
    dp.fill(-1)
    //top down, start with bigger problem - > base cases -> return solution of bigger problem
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

var robBottomUp = function(nums) {
    let dp = new Array(nums.length)
    //start with base cases
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0], nums[1])
    for(let i = 2; i < nums.length; i++) {
        let take = nums[i] + dp[i-2]
        let nottake = 0 + dp[i-1]
        dp[i] = Math.max(take,nottake)
    }
    return dp[nums.length-1]
}

var robBottomUpSpaceOptimised = function(nums) {
    
    //start with base cases
    let prev2 = nums[0]
    if(nums.length == 1) {
        return prev2
    }
    let prev = Math.max(nums[0], nums[1])
    for(let i = 2; i < nums.length; i++) {
        let take = nums[i] + prev2
        let nottake = 0 + prev
        let curri = Math.max(take,nottake)
        prev2 = prev
        prev = curri
        
    }
    return prev
}

var rob = function(nums) {
    return robBottomUpSpaceOptimised(nums)
}