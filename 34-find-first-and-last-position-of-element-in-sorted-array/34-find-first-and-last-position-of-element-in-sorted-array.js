/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    
    let firstOccurance = function() {
        let start = 0, end = nums.length - 1
        let res = -1
        while(start <= end) {
            let mid = start + parseInt((end-start)/2)
            if(nums[mid] == target) {
                res = mid
                end = mid - 1
            } else if(target < nums[mid]) {
                end = mid - 1
            } else if(target > nums[mid]) {
                start = mid + 1
            }
        }
        return res
    }
    
    let lastOccurance = function() {
        let start = 0, end = nums.length -1
        let res = -1
        while(start <= end) {
            let mid = start + parseInt((end - start)/2)
            if(nums[mid] == target) {
                res = mid
                start = mid + 1
            } else if(target < nums[mid]) {
                end = mid - 1
            } else if(target > nums[mid]) {
                start = mid + 1
            }
        }
        return res
    }
    
    return [firstOccurance(), lastOccurance()]
};