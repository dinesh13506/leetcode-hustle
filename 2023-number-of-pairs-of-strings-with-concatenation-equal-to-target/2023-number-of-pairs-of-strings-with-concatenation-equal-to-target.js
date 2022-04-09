/**
 * @param {string[]} nums
 * @param {string} target
 * @return {number}
 */
var numOfPairs = function(nums, target) {
    let count = 0
    let len = nums.length
    for(let i = 0; i < len; i++) {
        for(let j = 0; j < len; j++) {
            if(i!=j && (nums[i].length + nums[j].length) == target.length) {
                let temp = nums[i] + nums[j]
                if(temp === target) {
                    count++
                }
            }
        }
    }
    return count
};