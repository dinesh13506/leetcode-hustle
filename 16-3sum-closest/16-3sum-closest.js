/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    const n = nums.length
    nums.sort((a,b) => {
        return a - b
    })
    let closest = Infinity
    for(let i= 0; i < n; i++) {
        let first = nums[i]
        let sum = target - first
        let p1 = i + 1, p2 = n-1
        while(p1 < p2) {
            let temp = nums[p1] + nums[p2]
            let total = temp + first
            if(Math.abs(total - target) < Math.abs(closest - target)) {
                closest = total
            }
            if(temp <= sum) {
                p1++
            } else if(temp > sum) {
                p2--
            }
        }
    }
    
    return closest
};