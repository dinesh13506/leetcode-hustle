/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumMountainRemovals = function(nums) {
    
    let n = nums.length
    let dp1 = new Array(n)
    dp1.fill(1)
    let dp2 = new Array(n)
    dp2.fill(1)
    
    for(let i = 0; i < n; i++) {
        for(let prev = 0; prev < i; prev++) {
            if(nums[i] > nums[prev] && (dp1[prev] + 1 > dp1[i])) {
                dp1[i] = dp1[prev] + 1
            }
        }
    }
    
    for(let i = n-1; i >=0; i--) {
        for(let prev = n-1; prev > i; prev--) {
            if(nums[i] > nums[prev] && (dp2[prev] + 1 > dp2[i])) {
                dp2[i] = dp2[prev] + 1
            }
        }
    }
    
    
    let maxBioTonicLen = 0
    for(let i = 1; i < n-1; i++) {
        if(dp1[i] > 1 && dp2[i] > 1)
            maxBioTonicLen = Math.max(maxBioTonicLen, dp1[i] + dp2[i] -1)
    }
    
    return n - maxBioTonicLen
};