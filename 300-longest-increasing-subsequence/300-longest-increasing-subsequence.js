/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    
    let ceilIdx = function(tail, start, end, target) {
        while( end > start) {
            let mid = parseInt((start+end)/2)
            if(tail[mid] >= target) {
                end = mid
            } else {
                start = mid + 1
            }
        }
        return end
    }
    
    let tail = new Array(nums.length), len = 0
    tail[0] = nums[0]
    len++
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] > tail[len-1]) {
            tail[len] = nums[i]
            len++
        } else {
            let idx = ceilIdx(tail,0,len, nums[i])
            tail[idx] = nums[i]
        }
    }
    return len
};