/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    
    let sorted = nums.slice()
    sorted.sort(function(a,b) {
        if(a < b) {
            return -1
            
        } else if( a > b ) {
            return 1
        } else {
            return 0
        }
    })
    let start = Infinity, end = -Infinity
    for(let i = 0; i < nums.length; i++) {
        if(sorted[i] != nums[i]) {
            start = Math.min(start,i)
            end = Math.max(end,i)
        }
    }
    if(start > end) {
        return 0
    }
    return end - start + 1
};