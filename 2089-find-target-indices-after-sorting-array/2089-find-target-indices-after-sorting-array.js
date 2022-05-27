/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    
    nums.sort(function(num1,num2) { return num1-num2})
    let result = []
    
    let getFirstOccurance = function() {
        let start = 0, end = nums.length - 1
        let res = -1
        while(start <= end) {
            let mid = start + parseInt((end - start)/2)
            if(nums[mid] == target) {
                res = mid
                end = mid - 1
            }
            else if(target < nums[mid]) {
                end = mid - 1
            }
            else if(target > nums[mid]) {
                start = mid + 1
            }
        }
        return res
    }
    
    let getLastOccurance = function() {
        let start = 0, end = nums.length - 1
        let res = -1
        while(start <= end) {
            let mid = start + parseInt((end - start)/2)
            if(nums[mid] == target) {
                res = mid
                start = mid + 1
            }
            else if(target < nums[mid]) {
                end = mid - 1
            }
            else if(target > nums[mid]) {
                start = mid + 1
            }
        }
        return res
    }
    
    let first = getFirstOccurance()
    let last = getLastOccurance()
    if(first != -1 && last != -1) {
        for(let i = first; i <= last; i++) {
            result.push(i)
        }
    }
    return result
};