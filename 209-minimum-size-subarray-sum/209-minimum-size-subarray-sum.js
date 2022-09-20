/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    
    
    let total = 0
    for(let num of nums) {
        total += num
    }
    if(total < target) return 0
    let ans = nums.length
    const n = nums.length
    let sum = 0
    let p1 = 0
    for(let i = 0; i < n; i++) {
        sum += nums[i]
        if(sum >= target) ans = Math.min(ans,  i - p1 + 1)
        while(sum - nums[p1] >= target && p1 < i) {
            sum = sum - nums[p1]
            p1++
            ans = Math.min(ans,  i - p1 + 1)
        }
    }
    return ans
};