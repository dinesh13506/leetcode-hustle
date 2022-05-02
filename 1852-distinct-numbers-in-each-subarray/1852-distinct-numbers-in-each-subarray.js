/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var distinctNumbers = function(nums, k) {
    
    let map = new Map()
    let result = []
    for(let i = 0; i < k; i++) {
        let count = map.get(nums[i]) || 0
        count++
        map.set(nums[i],count)
    }
    result.push(map.size)
    let right = k
    while(right < nums.length) {
        let leftmost = nums[right - k]
        let l_count = map.get(leftmost)
        l_count--
        if(l_count == 0) {
            map.delete(leftmost)
        } else {
            map.set(leftmost,l_count)
        }
        let rightmost = nums[right]
        let r_count = map.get(rightmost) || 0
        r_count++
        map.set(rightmost,r_count)
        right++
        result.push(map.size)
    }
    return result
};