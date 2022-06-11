/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubArrayLen = function(nums, k) {
    
    let n = nums.length
    let map = new Map()
    let prefixSum = 0, longest = 0
    for(let i = 0; i < n; i++) {
        prefixSum = prefixSum + nums[i]
        if(prefixSum == k) {
            longest = i + 1
        }
        
        if(map.has(prefixSum -k)) {
            longest = Math.max(longest, i - map.get(prefixSum - k))
        }
        
        if(!map.has(prefixSum)) {
            map.set(prefixSum, i)
        }
    }
    return longest
};