/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
    
    let memo = new Map()
    let dp = function(i) {
        if(i == 0) {
            return nums[0]
        }
        if(i == 1) {
            return Math.max(nums[0],nums[1])
        }
        
        if(!memo.has(i)) {
            memo.set(i,Math.max(dp(i-1),nums[i] + dp(i-2)))
        }
        return memo.get(i)
    }
    
    return dp(nums.length-1)
};