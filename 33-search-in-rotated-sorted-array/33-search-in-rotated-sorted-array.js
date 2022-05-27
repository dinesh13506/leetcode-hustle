/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    let n = nums.length
    let start = 0, end = n - 1
    let minElemIdx = 0
    if(nums[start] <= nums[end]) {
        minElemIdx = 0
    } else {
        while(start <= end) {
            let mid = start + parseInt((end - start)/2)

            let left = (mid - 1 + n) % n
            let right = (mid + 1) % n

            if(nums[mid] > nums[right]) {
                minElemIdx = right
                break
            } else if(nums[mid] < nums[left]) {
                minElemIdx = mid
                break
            }
            
            if(nums[start] < nums[mid]) {
                start = mid + 1
            } else if(nums[mid] < nums[end]) {
                end = mid -1
            }
        }
    }
    
    //console.log("minElemIdx => ",minElemIdx)
    
    let bs = function(start, end) {
        if(start >=0 && end <= n-1) {
            while(start <= end) {
                let mid = start + parseInt((end - start)/2)
                if(nums[mid] == target) {
                    return mid
                }
                else if(target < nums[mid]) {
                    end = mid -1
                } else {
                    start = mid + 1
                }
            }
            return -1
        } else {
            return -1
        }
    }
    if(target == nums[minElemIdx]) {
        return minElemIdx
    }
    let leftsearch = bs(0, minElemIdx - 1)
    if(leftsearch != -1) {
        return leftsearch
    }
    let rightsearch = bs(minElemIdx + 1, n-1)
    if(rightsearch != -1) {
        return rightsearch
    }
    return -1
};