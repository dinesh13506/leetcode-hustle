/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    
    let copy = []
    for(let i = 0; i < m; i++) {
        copy[i] = nums1[i]
    }
    let i = 0, j = 0, k = 0 
    while(i < m && j < n) {
        if(copy[i] <= nums2[j]) {
            nums1[k] = copy[i]
            i++
            k++
        } else {
            nums1[k] = nums2[j]
            j++
            k++
        }
    }
    
    while(i<m) {
       nums1[k] = copy[i]
        i++
        k++
    }
    while(j < n) {
        nums1[k] = nums2[j]
        j++
        k++
    }
};