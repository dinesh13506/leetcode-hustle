/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function(nums1, nums2) {
    
    const m = nums1.length
    const n = nums2.length
    
    let next = new Array(m+1)
    next.fill(0)
    
    let max = 0
    for(let i=m-1; i >=0; i--) {
        let curr = new Array(m+1)
        curr.fill(0)
        for(let j = n-1; j >=0; j--) {
            if(nums1[i] == nums2[j]) {
                curr[j] = 1 + next[j+1]
                max = Math.max(max, curr[j])
            }
        }
        next = curr
    }
    return max
};