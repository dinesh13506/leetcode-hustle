/**
 * @param {number[]} nums
 * @return {number}
 */
var largestUniqueNumber = function(nums) {
    let map = new Map()
    for(let num of nums) {
        map.set(num, (map.get(num) || 0) + 1)
    }
    let max = -1
    for(let num of nums) {
        if(map.get(num) == 1) {
            max = Math.max(max,num)
        }
    }
    return max
};