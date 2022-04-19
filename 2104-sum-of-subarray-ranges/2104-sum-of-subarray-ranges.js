/**
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function(nums) {
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