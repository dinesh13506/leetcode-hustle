/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var isMajorityElement = function(nums, target) {
    let countMap = new Map()
    for(let num of nums) {
        let count = countMap.get(num) || 0
        count++
        countMap.set(num, count)
    }
    let targetCount = countMap.get(target) || 0
    return parseInt(targetCount) > parseInt(nums.length/2)
};