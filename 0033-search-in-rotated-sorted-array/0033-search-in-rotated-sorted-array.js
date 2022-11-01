/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    const n = nums.length;
    let start = 0, end = n - 1;
    while(start <= end) {
        let mid = start + (end - start)/2;
        mid = parseInt(mid);
        if(nums[mid] == target) {
            return mid;
        }
        if(nums[start] <= nums[mid]) {
            if(nums[start] <= target  && target < nums[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        else {
            if(target > nums[mid] && target <= nums[end]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }
    return -1;
};