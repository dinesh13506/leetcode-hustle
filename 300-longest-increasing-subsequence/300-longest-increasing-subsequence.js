/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let n = nums.length
    let temp = []
    
    //find index where target is found or just greater value is found
    let lowerBound = function(target) {
        let start = 0, end = temp.length - 1, ans = -1
        while(start <= end) {
            let mid = parseInt((start + end) / 2)
            if(temp[mid] === target) {
                ans = mid
                break
            } else if(target < temp[mid]) {
                ans = mid
                end = mid - 1
            } else {
                start = mid + 1
            }
        }
        return ans
    }
    
    let len = 0
    temp.push(nums[0])
    len++
    for(let i = 1; i < n; i++) {
        if(nums[i] > temp[temp.length-1]) {
            temp.push(nums[i])
            len++
        } else {
            let idx = lowerBound(nums[i])
            temp[idx] = nums[i]
        }
    }
    
    return len
};