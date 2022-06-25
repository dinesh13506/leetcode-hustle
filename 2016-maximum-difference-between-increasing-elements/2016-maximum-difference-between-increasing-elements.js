/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    
    let min = Infinity
    let minfromleft = []
    let n = nums.length
    for(let i = 0; i < n; i++) {
        min = Math.min(nums[i], min)
        minfromleft.push(min)
    }
    //console.log(minfromleft)
    
    let ans = -Infinity
    for(let i = 1; i < n; i++) {
        let min = minfromleft[i-1]
        if(nums[i] > min) {
            ans = Math.max(ans, nums[i] - min)
        }
    }
    return ans >= 0 ? ans : -1
};