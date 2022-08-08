/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
   
    const n = nums.length
    let lis = new Array(n)
    lis.fill(1)
    
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < i; j++) {
            if(nums[j] < nums[i]) {
                lis[i] = Math.max(lis[i], lis[j] + 1)
            }
        }
    }
    return Math.max(...lis)
};