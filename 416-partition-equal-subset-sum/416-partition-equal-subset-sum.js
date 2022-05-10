/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    
    let totalSum = 0 
    for(let num of nums) {
        totalSum += num
    }
    
    if( (totalSum & 1) == 1) {
        return false
    }
    
    let target = totalSum/2
    let n = nums.length
    let prev = new Array(target+1)
    prev.fill(-1)
    
    prev[0] = true
    
    
    for(let i = 0; i < n; i++) {
        let curr = new Array(target+1)
        curr.fill(-1)
        for(let j = 1; j <= target; j++) {
            if( i == 0) {
                curr[j] = (j == nums[i])
                continue
            }
            let nottake = prev[j]
            let take = false
            if(nums[i] <= j) {
                take = prev[j-nums[i]]
            }
            curr[j] = take || nottake
        }
        prev = curr
    }
    return prev[target]
};