/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    
    let set = new Set();
    let max = 0;
    for(let num of nums) {
        max = Math.max(max, num);
        if(num > 0 && set.has(num) == false) {
            set.add(num);
        }
    }
    //let max = (2 ** 31) - 1;
    for(let i = 1; i <= max; i++) {
        if(set.has(i) == false) {
            return i;
        }
    }
    return max + 1;
};