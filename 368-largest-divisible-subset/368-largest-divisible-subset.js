/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    
    let n = nums.length
    nums.sort(function(a,b) { return a - b })
    let dp = new Array(n)
    dp.fill(1)
    
    let idx = new Array(n)
    idx.fill(-1)
    
    for(let i = 0; i < n; i++) {
        for(let prev = 0; prev < i; prev++) {
            if(nums[i] % nums[prev] === 0 && dp[i] < dp[prev] + 1) {
                dp[i] = dp[prev] + 1
                idx[i] = prev
            }
        }
    }
    
    let ans = [], max = 0, index = -1
    for(let i = 0; i < n; i++) {
        if(max < dp[i]) {
            max = dp[i]
            index = i
        }
    }
    
    while(index != -1) {
        ans.push(nums[index])
        index = idx[index]
    }
    return ans.reverse()
};