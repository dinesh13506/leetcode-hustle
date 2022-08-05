/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    
    let dp = new Array(target+1)
    dp.fill(0)
    dp[0] = 1
    for(let sum = 1; sum <= target; sum++) {
        for(let num of nums) {
            if(sum >= num) {
                dp[sum] += dp[sum-num]
            }
        }
    }
    return dp[target]
};


var combinationSum4Memo = function(nums, target) {
    
    let memo = new Map()
    let dp = (sum) => {
        if(sum == 0) {
            return 1
        }
        if(memo.has(sum)) {
            return memo.get(sum)
        }
        let result = 0
        for(let num of nums) {
            if(sum >= num) {
                result += dp(sum - num)
            }
        }
        memo.set(sum, result)
        return result
    }
    return dp(target)
};