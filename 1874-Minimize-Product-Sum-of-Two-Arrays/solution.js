/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var minProductSum = function(nums1, nums2) {
    
    let min_product = 0
    nums1.sort(function(a,b) { return b - a})
    nums2.sort(function(a,b) { return a - b})
    let n = nums1.length
    let taken = new Array(n)
    taken.fill(false)
    let j = 0
    for(let i = 0; i < n; i++) {
        let a = nums1[i]
        let b = nums2[j]
        j++
        min_product = min_product + (a*b)
    }
    return min_product
};