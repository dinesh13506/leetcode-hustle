/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    
    
    let n = nums.length
    let start = 0, end = n - 1
    
    while(start <= end) {
        let mid = start + parseInt((end-start)/2)
        if(mid > 0 && mid < n-1) {
            if(nums[mid] > nums[mid-1] && nums[mid] > nums[mid+1]) {
                return mid
            } else if(nums[mid] < nums[mid-1]) {
                end = mid - 1
            } else if(nums[mid] < nums[mid+1]) {
                start = mid + 1
            }
        } else {
            if(mid == 0) {
                if(mid + 1 < n && nums[mid] > nums[mid+1]) {
                    return mid
                } else if(mid + 1 < n && nums[mid] < nums[mid+1]) {
                    return mid + 1
                } else {
                    return mid
                }
            } else if(mid == n-1) {
                if(mid-1 >= 0 && nums[mid] > nums[mid-1]) {
                    return mid
                } else if(mid-1 >= 0 && nums[mid] < nums[mid-1]) {
                    return mid - 1
                }
                else {
                    return mid
                }
            }
        }
    }
};