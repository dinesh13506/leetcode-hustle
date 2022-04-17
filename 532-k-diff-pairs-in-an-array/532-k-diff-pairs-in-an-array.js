/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    
    let map = new Map()
    for(let num of nums) {
        map.set(num, (map.get(num) || 0) + 1)
    }
    let ans = 0
    for(let x of map.keys()) {
        let freq = map.get(x)
        if( k > 0 && map.get(x+k)) {
            ans++
        } 
        if( k == 0 && freq > 1) {
            ans++
        }
    }
    return ans
};