/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    
    const n = nums.length
    let getFirstOccurance = () => {
        let start = 0, end = n - 1
        let answer = n
        while(start <= end) {
            let mid = start + parseInt((end - start)/2)
            if(nums[mid] == target) {
                answer = Math.min(answer, mid)
                end = mid - 1
            }
            else if(target < nums[mid]) {
                end = mid - 1
            } else {
                start = mid + 1
            }
        }
        if(answer < 0 || answer >= n) {
            answer = -1
        }
        
        return answer
    }
    
    let getLastOccurance = () => {
        let start = 0, end = n - 1
        let answer = -1
        while(start <= end) {
            let mid = start + parseInt((end - start)/2)
            if(nums[mid] == target) {
                answer = Math.max(answer, mid)
                start = mid + 1
            }
            else if(target < nums[mid]) {
                end = mid - 1
            } else {
                start = mid + 1
            }
        }
        if(answer < 0 || answer >= n) {
            answer = -1
        }
        
        return answer
    }
    
    return [ getFirstOccurance(), getLastOccurance() ]
};