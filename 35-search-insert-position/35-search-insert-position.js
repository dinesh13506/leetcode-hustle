/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    
    let start = 0, end = nums.length-1, ans = 0
    while(start <= end) {
        let mid = parseInt((start+end)/2)
        if(nums[mid] === target) {
            return mid
        }else if(target < nums[mid]) {
            end = mid - 1
        } else {
            start = mid + 1
        }
    }
    console.log(start,end)
    if(start >= nums.length) {
        return nums.length
    }
    return start
};