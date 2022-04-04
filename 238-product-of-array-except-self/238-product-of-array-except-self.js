/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    
    let product = 1, length = nums.length,answer = new Array(length), c = 0
    for(let num of nums) {
        product *= (num != 0 ? num : 1)
        if(num ==0) c++
    }
    for(let i = 0; i < length; i++) {
        if(nums[i] == 0 && c == 1) {
            answer[i] = product
        } else if(c >= 1) {
            answer[i] = 0
        } else {
            answer[i] = product/ nums[i]
        }
    }
    return answer
};