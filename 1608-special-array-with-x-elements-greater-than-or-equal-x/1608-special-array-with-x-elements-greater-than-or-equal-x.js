/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
    
    for(let x = 0; x<= nums.length; x++) {
        let c = 0
        for(let num of nums) {
            if(num >= x) {
                c++
            }
        }
        if(c == x) {
            return x
        }
    }
    return -1
    
};