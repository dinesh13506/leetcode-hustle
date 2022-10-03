/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    
    let ans = null
    let counter = 0
    for(let num of nums) {
        if(counter == 0) ans = num
        if(num == ans) {
            counter++
        } else {
            counter--
        }
    }
    return ans
};