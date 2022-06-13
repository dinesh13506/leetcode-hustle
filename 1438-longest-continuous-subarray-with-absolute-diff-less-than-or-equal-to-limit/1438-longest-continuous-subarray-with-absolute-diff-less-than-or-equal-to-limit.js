/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
    
    let n = nums.length
    let left = 0, min = Infinity, max = -Infinity
    let longest = 0
    let maxdeq = []
    let mindeq = []
    
    for(let right = 0; right < n; right++) {
       
        while(maxdeq.length && maxdeq[maxdeq.length - 1] < nums[right]) {
            maxdeq.pop()
        }
        maxdeq.push(nums[right])
        while(mindeq.length && mindeq[mindeq.length-1] > nums[right]) {
            mindeq.pop()
        }
        mindeq.push(nums[right])
        
        if(left <= right && (maxdeq[0] - mindeq[0]) > limit) {
            if(nums[left] == maxdeq[0]) {
                maxdeq.shift()
            }
            if(nums[left] == mindeq[0]) {
                mindeq.shift()
            }
            left++
        } else {
            longest = Math.max(longest, right - left + 1)
        }
        
    }
    return longest
};