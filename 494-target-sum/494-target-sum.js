/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    
    let n = nums.length
    let total = 0
    for(let num of nums) {
        total = total + num
    }
    
    let s2 = (total - target)
    if(s2 % 2 != 0) {
        return 0
    }
    
    let newTarget = s2 / 2
    
    let prev = new Map()
    
    
    for(let j = 0; j <= newTarget; j++) {
        if(j == 0 && nums[0] == 0) {
            prev.set(j,2)
            continue
        }
        if(j == 0) {
            prev.set(j,1)
            continue
        }
        if( j == nums[0]) {
            prev.set(j,1)
            continue
        } else {
            prev.set(j,0)
            continue
        }
    }
    
    for(let i = 1; i < n; i++) {
        let curr = new Map()
        for(let j = 0; j <= newTarget; j++) {
            let notake = prev.get(j) || 0
            let take= 0 
            if(nums[i] <= j) {
                take = prev.get(j - nums[i]) || 0
            }
            curr.set(j,take + notake)
        }
        prev = curr
    }
    
    return prev.get(newTarget) || 0
    
    
};