/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    
    let bs = function(start, end) {
        while(start <= end) {
            let mid = start + parseInt((end - start)/2)
            if(nums[mid] == target) {
                return mid
            }
            if(target < nums[mid]) {
                end = mid - 1
            } else {
                start = mid + 1
            }
        }
        return -1
    }
    
    let n = nums.length
    let index = bs(0, n-1)
    if(index != -1) {
        return index
    }
    
    let floor = function(start, end) {
        while(start <= end) {
            let mid = start + parseInt((end - start)/2)
            if(nums[mid] == target) {
                return mid
            }
            if(target < nums[mid]) {
                end = mid - 1
            } else if(target > nums[mid]) {
                start = mid + 1
            }
        }
        return start
    }
    
    return floor(0,n-1)
};