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
    
    let currlen = 1, prevnum = nums[0], max = 1
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] == prevnum + 1) {
            currlen++
            max = Math.max(currlen, max)
            prevnum = nums[i]
        } else {
            max = Math.max(currlen, max)
            currlen = 1
            prevnum = nums[i]
        }
    }
    return max
};