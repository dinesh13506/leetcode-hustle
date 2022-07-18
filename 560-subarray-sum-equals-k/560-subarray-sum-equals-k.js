/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    
    let map = new Map()
    map.set(0,1)
    let sum = 0, count = 0
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i]
        if(map.has(sum-k)) {
            count += map.get(sum-k)
        }
        map.set(sum, (map.get(sum) || 0) + 1)        
    }
    return count
};