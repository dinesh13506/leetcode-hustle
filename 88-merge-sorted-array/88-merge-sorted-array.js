/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    
    let find = function(target, length) {
        for(let i = 0; i < length; i++) {
            if(target < nums1[i]) {
                return i
            }
        }
        return length
    }
    
    for(let j = 0; j < n; j++) {
        let index = find(nums2[j], m + j)
        let lastIndex = m + n - 1
        while(index < lastIndex) {
            nums1[lastIndex] = nums1[lastIndex-1]
            lastIndex--
        }
        nums1[index] = nums2[j]
    }
    
};