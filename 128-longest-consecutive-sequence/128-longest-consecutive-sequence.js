/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let ans = 0
    const n = nums.length
    if(n == 0) {
        return ans
    }
    nums.sort((a,b) => {
        return a - b
    })
    
    let set = new Set(nums)
    nums = [...set]
    
    let  max = 0
    let map = new Map()
    for(let i = 0; i < nums.length; i++) {
        let currlen = 1 // nums[i] alone
        let prev = map.get(nums[i] - 1)  || 0
        let next = map.get(nums[i] + 1)  || 0
        currlen = Math.max( prev + next + 1, currlen)
        map.set(nums[i], currlen)
        max = Math.max(max, currlen)
    }
    return max
};