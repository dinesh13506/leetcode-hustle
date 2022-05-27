/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    
    let n = nums.length
    let start = 0, end = n - 1
    if(nums[start] <= nums[end]) {
        return nums[start]
    }
    while(start <= end) {
        let mid = start + parseInt((end -start)/2)
        let left = (mid-1 + n) % n
        let right = (mid + 1) % n
        
        if(nums[mid] > nums[right]) {
            return nums[right]
        }
        else if(nums[mid] < nums[left]) {
            return nums[mid]
        }
        
        if(nums[start] <= nums[mid]) {
            start = mid + 1
        } else if(nums[mid] <= nums[end]) {
            end = mid - 1
        }
    }
};