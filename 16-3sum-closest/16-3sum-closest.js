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
    let sums = []
    for(let i= 0; i < n; i++) {
        let first = nums[i]
        let sum = target - first
        let p1 = i + 1, p2 = n-1
        let closest = Infinity
        while(p1 < p2) {
            let temp = nums[p1] + nums[p2]
            sums.push(temp + first)
            if(temp <= sum) {
                p1++
            } else if(temp > sum) {
                p2--
            }
        }
    }
    
    sums.sort((a,b) => {
        return Math.abs(a - target) - Math.abs(b - target)
    })
    //console.log(sums)
    return sums[0]
};