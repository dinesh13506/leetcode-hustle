/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    
    let memo = new Array(nums.length)
    memo.fill(-1)
    
    let dp = (index) => {
        if(index == 0) return true
        if(memo[index] != -1) return memo[index]
        let canReach = false
        for(let prev = index-1; prev>=0; prev--) {
            if(nums[prev] + prev >= index) {
                canReach = canReach || dp(prev)
            }
        }
        memo[index] =  canReach
        return memo[index]
    }
    return dp(nums.length-1)
};