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
    // case 1 if length of both is zero
    dp[0][0] = 0 //nothing common
    
    //case 2 nums2 length is 1
    for(let i=1; i <= m; i++) {
        if(nums1[i-1] == nums2[0]) {
            dp[i][1] = 1
            max = 1
        }
    }
    
    //case 3 nums1 length is 1
    for(let j=1; j <= n; j++) {
        if(nums1[0] == nums2[j]) {
            dp[1][j] = 1
            max = 1
        }
    }
    
    for(let i=1; i <= m; i++) {
        for(let j=1; j <= n; j++) {
            if(nums1[i-1] == nums2[j-1]) {
                dp[i][j] = 1 + dp[i-1][j-1]
                max = Math.max(max, dp[i][j])
            }
        }
    }
    return max
};