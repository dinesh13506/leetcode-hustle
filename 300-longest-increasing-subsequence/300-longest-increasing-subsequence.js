/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    
    let n = nums.length, lis = new Array(n)
    lis[0] = 1
    for(let i = 1; i < n; i++) {
        lis[i] = 1
        for(let j = 0; j < i; j++) {
            if(nums[j] < nums[i]) {
                lis[i] = Math.max(lis[i],lis[j] + 1)
            }
        }
    }
    
    let res = -Infinity
    for(let i = 0; i < n; i++) {
        res = Math.max(res, lis[i])
    }
    return res
};