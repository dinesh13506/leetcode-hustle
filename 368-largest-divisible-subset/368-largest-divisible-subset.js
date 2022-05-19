/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    
    let n = nums.length
    nums.sort(function(a,b) { return a - b })
    let dp = new Array(n)
    dp.fill(1)
    let lis = new Array(n)
    for(let i = 0; i < n; i++) {
        lis[i] = []
    }
    
    for(let i = 0; i < n; i++) {
        for(let prev = 0; prev < i; prev++) {
            if(nums[i] % nums[prev] === 0 && dp[i] < dp[prev] + 1) {
                dp[i] = Math.max(dp[i], dp[prev] + 1)
                lis[i] = lis[prev].slice()
            }
        }
        lis[i].push(nums[i])
    }
    
    //console.log(lis)
    //console.log(dp)
    let ans = null, max = 0
    for(let i = 0; i < n; i++) {
        if(max < lis[i].length) {
            max = lis[i].length
            ans = lis[i]
        }
    }
    return ans
};