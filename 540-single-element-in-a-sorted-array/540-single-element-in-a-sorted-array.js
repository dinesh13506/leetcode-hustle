/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    
    let lo = 0, hi = nums.length - 1
    while(lo < hi) {
        let mid = parseInt((lo + hi) / 2)
        let isHalvesEven = (hi - mid) % 2 == 0 ? true : false
        if(nums[mid + 1] == nums[mid]) {
            if(isHalvesEven) {
                lo = mid + 2
            } else {
                hi = mid - 1
            }
        } else if(nums[mid-1] == nums[mid]) {
            if(isHalvesEven) {
                hi = mid - 2
            } else {
                lo = mid + 1
            }
        } else {
            return nums[mid]
        }
    }
    return nums[lo]
};