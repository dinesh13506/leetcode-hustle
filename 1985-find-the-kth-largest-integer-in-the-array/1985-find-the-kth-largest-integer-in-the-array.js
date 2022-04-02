/**
 * @param {string[]} nums
 * @param {number} k
 * @return {string}
 */
var kthLargestNumber = function(nums, k) {
    
    nums.sort(function(a,b) {
        if(a.length == b.length) {
            return Number(BigInt(b) - BigInt(a))
        }
        
        return b.length - a.length
    })
    
    return nums[k-1]
};