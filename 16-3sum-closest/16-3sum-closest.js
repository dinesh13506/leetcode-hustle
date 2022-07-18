/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let n = nums.length
    nums.sort((a,b) => { return a - b })
    
    let diff = Infinity
    for(let i = 0; i < n; i++) {
        let lo = i + 1, hi = n - 1
        while(lo < hi) {
            let sum = nums[i] + nums[lo] + nums[hi]
            if(Math.abs(target - sum) < Math.abs(diff)) {
                diff = target - sum
                if(diff == 0) break
            }
            else if(sum < target) {
                lo++
            }
            else {
                hi--
            }
        }
    }
    return target - diff
};