/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    
    let binarySearch = function(start,end) {
        if(start > end) {
            return -1
        }
        let mid = parseInt((start+end)/2)
        if(nums[mid] === target) {
            return mid
        }
        if(target < nums[mid]) {
            return binarySearch(start,mid-1)
        } else {
            return binarySearch(mid+1,end)
        }
    }
    return binarySearch(0,nums.length-1)
};


//iterative solution
var searchIterative = function(nums, target) {
    
    let binarySearch = function(start,end) {
        while(start<=end) {
            let mid = parseInt((start+end)/2)
            if(nums[mid] === target) {
                return mid
            } else if(target < nums[mid]) {
                end = mid - 1
            } else {
                start = mid + 1
            }
        }
        return -1
    }
    return binarySearch(0,nums.length-1)
};