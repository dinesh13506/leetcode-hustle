/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    
    let set = new Set()
    let min = 1, max = 1
    for(let num of nums) {
        if(num>0 && !set.has(num)) {
            set.add(num)
            max = Math.max(num,max)
        }
    }
    
    for(let n = min; n <=max; n++) {
        if(!set.has(n)) {
            return n
        }
    }
    return max + 1
};