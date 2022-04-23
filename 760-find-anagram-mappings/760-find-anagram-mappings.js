/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var anagramMappings = function(nums1, nums2) {
    
    let indexMap = new Map()
    for(let i = 0; i < nums2.length; i++) {
        indexMap.set(nums2[i],i)
    }
    let mapping = []
    for(let i = 0; i < nums1.length; i++) {
        mapping.push(indexMap.get(nums1[i]))
    }
    return mapping
};