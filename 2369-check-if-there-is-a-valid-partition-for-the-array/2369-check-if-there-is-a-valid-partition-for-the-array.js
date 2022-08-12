/**
 * @param {number[]} nums
 * @return {boolean}
 */
var validPartition = function(nums) {
    const n = nums.length
    let memo = new Array(n)
    memo.fill(-1)
    let dp = (i) => {
        if(i >= n) return true
        if(memo[i] != -1) return memo[i]
        if( (i + 1 < n) && nums[i] == nums[i+1]) {
            if(dp(i+2)) return true
            if((i + 2 < n) && nums[i] == nums[i+2]) {
                if(dp(i+3)) return true
            }
        }
        if((i + 2 < n) && (nums[i] == nums[i+1] - 1) && (nums[i] == nums[i+2] - 2)) {
            if( dp(i+3) ) return true
        }
        return memo[i] = false
    }
    return dp(0)
};