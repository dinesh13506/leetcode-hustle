/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function(nums) {
    
    let left = 0
    let sum = 0
    let map = new Map()
    let reward = 0
    for(let right = 0; right < nums.length; right++) {
        sum = sum + nums[right]
        map.set(nums[right], (map.get(nums[right]) || 0) + 1)
        while(map.get(nums[right]) > 1 && left <= right) {
            map.set(nums[left], map.get(nums[left]) - 1)
            sum = sum - nums[left]
            left++
        }
        reward = Math.max(reward, sum)
    }
    return reward
};