/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    
    let i = 0, j = 0
    let result = []
    while(i < m && j < n) {
        if(nums1[i] <= nums2[j]) {
            result.push(nums1[i])
            i++
        } else {
            result.push(nums2[j])
            j++
        }
    }
    while(i < m) {
        result.push(nums1[i])
        i++
    }
    
    while(j < n) {
        result.push(nums2[j])
        j++
    }
    
    for(let k = 0; k < m + n; k++) {
        nums1[k] = result[k]
    }
};