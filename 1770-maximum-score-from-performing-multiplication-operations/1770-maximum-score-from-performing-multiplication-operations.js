/**
 * @param {number[]} nums
 * @param {number[]} multipliers
 * @return {number}
 */
var maximumScore = function(nums, multipliers) {
    
    const m = multipliers.length
    const n = nums.length
    
    let memo = new Array(m)
    for(let i = 0; i < m; i++) {
        memo[i] = new Array(m)
        memo[i].fill(-Infinity)
    }
    let dp = (mindex,left) => {
        //console.log(mindex)
        if(mindex >= m) {
            return 0
        }
        if(memo[mindex][left] != -Infinity) {
            return memo[mindex][left]
        }
        
        let right = (n-1) - (mindex - left)
        let l = nums[left] * multipliers[mindex] + dp(mindex + 1, left + 1)
        let r = nums[right] * multipliers[mindex] + dp(mindex + 1, left)
        memo[mindex][left] =  Math.max(l,r)
        return memo[mindex][left]
    }
    return dp(0,0)
};