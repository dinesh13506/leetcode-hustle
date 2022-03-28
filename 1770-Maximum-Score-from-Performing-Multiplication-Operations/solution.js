/**
 * @param {number[]} nums
 * @param {number[]} multipliers
 * @return {number}
 */
 var maximumScore = function(nums, multipliers) {
    let n = nums.length
    let m = multipliers.length
    let memo = new Array(m)
    for(let i = 0; i < m; i++) {
        let temp = new Array(m)
        temp.fill(0)
        memo[i] = temp
    }
    let dp = function(i,left) {
        if(i === m) {
            return 0
        }
        
        let right = n - 1 - (i-left)
        if(memo[i][left] == 0) {
            memo[i][left] = Math.max(nums[left] *multipliers[i] + dp(i+1,left+1), nums[right] *multipliers[i] + dp(i+1,left))
        } 
        
        return memo[i][left]
    }
    
    return dp(0,0)
};