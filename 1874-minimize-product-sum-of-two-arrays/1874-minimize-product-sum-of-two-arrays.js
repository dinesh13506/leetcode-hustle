/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minProductSum = function(nums1, nums2) {
    
    nums1.sort((a,b) => { return a - b});
    nums2.sort((a,b) => { return  b - a});
    const n = nums1.length;
    let ans = 0;
    for(let i = 0; i < n; i++) {
        ans  += (nums1[i] * nums2[i]);
    }
    return ans;
};