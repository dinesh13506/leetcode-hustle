/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    
    let i = 0, ans = []
    while((2 * i+ 1) < nums.length) {
        let freq = nums[2 * i]
        let val = nums[2 * i+ 1]
        while(freq > 0) {
            ans.push(val)
            freq--
        }
        i++
    }
    return ans
};