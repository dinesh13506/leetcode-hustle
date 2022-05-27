/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    let start = 0 , end = nums.length - 1
    while(start <= end) {
        let mid = start + parseInt( (end - start) / 2 )
        if(nums[mid] == target) return mid
        else if(target < nums[mid]) end = mid -1
        else if(target > nums[mid]) start = mid + 1
    }
    return -1
};