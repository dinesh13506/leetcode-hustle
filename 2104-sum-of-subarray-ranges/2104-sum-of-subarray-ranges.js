/**
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function(nums) {
    
    let max = function(start,end) {
        if(start == end) {
            return nums[start]
        }
        return Math.max(nums[start], max(start + 1, end))
    }
    let min = function(start,end) {
        if(start == end) {
            return nums[start]
        }
        return Math.min(nums[start], min(start + 1, end))
    }
    
    let ans = 0
    for(let i = 0; i < nums.length; i++) {
        let largest = nums[i], smallest = nums[i]
        for(let j = i; j < nums.length; j++) {
            largest = Math.max(largest,nums[j])
            smallest = Math.min(smallest,nums[j])
            //console.log(i,j,largest,smallest)
            ans = ans + ( largest - smallest)
        }
    }
    return ans
};