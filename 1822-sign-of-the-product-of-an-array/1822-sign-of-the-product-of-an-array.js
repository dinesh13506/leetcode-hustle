/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    
    let negCount = 0
    for(let num of nums) {
        if(num < 0) {
            negCount++
        }
        if(num == 0) {
            return 0
        }
    }
    
    return (negCount%2 == 0) ? 1 : -1
};