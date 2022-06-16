/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    
    let map = new Map()
    map.set(0,-1)
    const n = nums.length
    let runningSum = 0
    for(let i = 0; i < n; i++) {
        runningSum += nums[i]
        runningSum %= k
        if(map.has(runningSum)) {
            let prev = map.get(runningSum)
            if(i - prev >= 2) {
                return true
            }
        }
        else 
            map.set(runningSum, i )
        
    }
    return false
};