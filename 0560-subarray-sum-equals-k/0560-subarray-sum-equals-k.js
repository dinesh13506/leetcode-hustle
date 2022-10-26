/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    
    let count = 0;
    let map = new Map();
    const n = nums.length;
    let ps = new Array(n);
    for(let i = 0; i < n; i++) {
        ps[i] = (i > 0 ? ps[i-1] : 0) + nums[i];
    }
    map.set(0,1);
    for(let i = 0; i < n; i++) {
        if(map.has(ps[i] - k)) {
            count += map.get(ps[i] - k);
        }
        map.set(ps[i], (map.get(ps[i]) || 0) + 1);
    }
    return count;
};