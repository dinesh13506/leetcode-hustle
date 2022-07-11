/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    let map = new Map()
    for(let i = 0; i < nums.length; i++) {
        let curr = nums[i]
        if(map.has(target - curr)) {
            return [map.get(target-curr), i]
        } else {
            map.set(curr, i)
        }
    }
    
 };