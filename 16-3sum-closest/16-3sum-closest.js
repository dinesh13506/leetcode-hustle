/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    
    let diff = Infinity
    nums.sort(function(a,b) {
        return a - b
    })
    for(let i = 0; i < nums.length; i++) {
        let low = i + 1, high = nums.length - 1
        while(low < high) {
            let sum = nums[i] + nums[low] + nums[high]
            if(Math.abs(target - sum) < Math.abs(diff)) {
                diff = target - sum
            } else if( sum < target) {
                low++
            } else {
                high--
            }
        }
        if(diff == 0) {
            break
        }
    }
    return target - diff
};