/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    
    let count = 0;
    let map = new Map();
    const n = nums.length;
    let sum = 0;
    map.set(0,1);
    for(let i = 0; i < n; i++) {
        sum = (i > 0 ? sum : 0) + nums[i];
        if(map.has(sum - k)) {
            count += map.get(sum - k);
        }
        map.set(sum, (map.get(sum) || 0) + 1);
    }
    return count;
};