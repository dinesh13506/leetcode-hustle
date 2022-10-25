/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
    let set = new Set();
    for(let x of nums[0]) {
        if(set.has(x)) continue;
        set.add(x);
    }
    for(let i = 1; i < nums.length; i++) {
        let prev = new Set();
        for(let x of nums[i]) {
            if(set.has(x)) {
                prev.add(x);
            }
        }
        set = prev;
    }
    
    return [...set].sort((a,b) => {return a - b});
};