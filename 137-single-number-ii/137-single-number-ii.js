/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let map = new Map()
    let ans = -1
    for(let i of nums) {
        let c = map.get(i) || 0
        c++
        map.set(i,c)
    }
    for(let key of map.keys()) {
        if(map.get(key) == 1) {
            return key
        }
    }
};