/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function(nums, x) {
    
    let n = nums.length
    let total = 0
    for(let num of nums) {
        total = total + num
    }
    let target = total - x
    
    if(target == 0) {
        return n
    }
    
    let prefixsum = 0
    let map = new Map()
    let longest = -1
    for(let i = 0; i < n; i++) {
        prefixsum += nums[i]
        if(prefixsum == target) {
            longest = i + 1
        }
        if(map.has(prefixsum - target)) {
            longest = Math.max(longest, i - map.get(prefixsum - target))
        }
        if(!map.has(prefixsum)) {
            map.set(prefixsum, i)
        }
    }
    
    return longest == -1 ? -1 : n - longest
};