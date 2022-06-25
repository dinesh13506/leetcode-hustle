/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumXOR = function(nums) {
    
    let ans = 0
    for(let num of nums) {
        ans = ans | num
    }
    return ans
};