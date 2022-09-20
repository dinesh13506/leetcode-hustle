/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function(nums1, nums2) {
    
    const m = nums1.length
    const n = nums2.length
    
    let dp = new Array(m+1)
    for(let i = 0; i <= m; i++) {
        dp[i] = new Array(n+1)
        dp[i].fill(0)
    }
    
    let max = 0
    for(let i=m-1; i >=0; i--) {
        for(let j = n-1; j >=0; j--) {
            if(nums1[i] == nums2[j]) {
                dp[i][j] = 1 + dp[i+1][j+1]
                max = Math.max(max, dp[i][j])
            }
        }
    }
    return max
};