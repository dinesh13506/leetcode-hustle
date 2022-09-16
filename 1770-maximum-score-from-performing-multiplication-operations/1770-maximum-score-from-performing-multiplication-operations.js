/**
 * @param {number[]} nums
 * @param {number[]} multipliers
 * @return {number}
 */
var maximumScore = function(nums, multipliers) {
    
    const m = multipliers.length
    const n = nums.length
    
    let dp = new Array(m + 1)
    for(let i = 0; i <= m; i++) {
        dp[i] = new Array(m + 1)
        dp[i].fill(0)
    }
    
    let nextrow = new Array(m+1)
    nextrow.fill(0)
    for(let mindex = m-1; mindex >= 0; mindex--) {
        let currrow = new Array(m+1)
        currrow.fill(0)
        for(let left = m-1; left>=0 ; left--) {
            let right = (n-1) - (mindex - left)
            let l = nums[left] * multipliers[mindex] + nextrow[left + 1]
            let r = nums[right] * multipliers[mindex] + nextrow[left]
            currrow[left] =  Math.max(l,r)
        }
        nextrow = currrow
    }
    return nextrow[0]
};


var maximumScoreTopDown = function(nums, multipliers) {
    
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