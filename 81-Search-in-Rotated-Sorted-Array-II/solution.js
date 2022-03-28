/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
 var search = function(nums, target) {
    
    let n = nums.length
    let prev = -Infinity
    let k = -1
    for(let i = 0; i < n; i++) {
        if(nums[i] >= prev) {
            prev = nums[i]
            continue
        } else {
            k = i
            break
        }
    }
    
    if(nums[k] === target) {
        return true
    }
    
    let binarysearch = function(start,end) {
       while(start <= end) {
           let mid = parseInt((start+end)/2)
           if(nums[mid] == target) {
               return true
           }
           else if( target < nums[mid]) {
               end = mid - 1
           } else {
               start = mid + 1
           }
       }
       return false
    }
    
    return binarysearch(0,k-1) || binarysearch(k+1,nums.length-1)
};