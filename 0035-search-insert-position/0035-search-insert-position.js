/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    
    let lowerIndex = -1;
    let start = 0, end = nums.length - 1;
    while(start <= end) {
        let mid = parseInt ((start + end)/2);
        if(nums[mid] == target) {
            return mid;
        } else if(target < nums[mid]) {
            end = mid - 1;
        } else {
            lowerIndex = mid;
            start = mid + 1;
        }
    }
    return lowerIndex + 1;
};