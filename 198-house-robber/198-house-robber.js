/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let n = nums.length
    let prev2 = nums[0]
    let prev1 = n > 1 ? Math.max(nums[0], nums[1]) : prev2
    for(let i = 2; i < n; i++) {
        let curr = Math.max(nums[i] + prev2 , prev1)
        prev2 = prev1
        prev1 = curr
    }
    return prev1
};


var robMemo = function(nums) {
    let n = nums.length
    let memo = new Array(n)
    memo.fill(-1)
    let dp = (index) => {
        if(index < 0) {
            return 0
        }
        if(memo[index] != -1) return memo[index]
        let rob = nums[index] + dp(index - 2)
        let not_rob = dp(index - 1)
        memo[index] =  Math.max(rob, not_rob)
        return memo[index]
    }
    return dp(n-1)
};