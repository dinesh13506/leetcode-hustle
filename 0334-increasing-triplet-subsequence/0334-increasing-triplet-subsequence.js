/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    
    let value1 = Infinity, value2 = Infinity
    
    for(let num of nums) {
        if(num < value1) {
            value1 = num
        }
        else if(num > value1 && num < value2) {
            value2 = num
        }
        else if(num > value2) {
            return true
        }
    }
    return false
};