/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    
    const n = nums.length;
    if(n <= 1) {
        return false;
    }
    let prefixSum = new Array(n);
    let map = new Map();
    for(let i = 0;  i < n; i++) {
        prefixSum[i] = (i > 0 ? prefixSum[i-1] : 0) + nums[i];
        if(map.has(prefixSum[i]) == false) {
            map.set(prefixSum[i], i);
        } else {
            let j = map.get(prefixSum[i]);
            if(i - j > 1) {
                return true;
            }
        }
    }
    //console.log(prefixSum)
    for(let i = 0;  i < n; i++) {
        //case 1 if sum at ith index is multiple of k and sub array size > 1
        if(prefixSum[i] % k == 0 && i > 0) {
            return true;
        } else {
            let value = prefixSum[i] - k;
            while(value > 0) {
               if(map.has(value)) {
                    let j = map.get(value);
                    if(i - j > 1) {
                        return true
                    }
                }
                value = value - k;
            }
        }
    }
    return false;
};