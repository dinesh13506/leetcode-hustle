/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    const n = nums.length;
    let expectedSum = n * ( n + 1 ) * (1 / 2);
    let sum = 0;
    for(let num of nums) {
        sum += num;
    }
    
    let diff = expectedSum - sum ;
    let set = new Set();
    for(let num of nums) {
        if(set.has(num)) {
            return [num, num + diff];
        }
        set.add(num);
    }
    return [];
};