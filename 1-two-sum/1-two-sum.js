/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    let map = new Map()
    for(let i = 0; i < nums.length; i++) {
        let b = target - nums[i]
        if(map.has(b)) {
            return [i, map.get(b)]
        }
        map.set(nums[i],i)
    }
    return [-1,-1]
};