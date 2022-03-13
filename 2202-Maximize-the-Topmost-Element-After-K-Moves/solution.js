/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var maximumTop = function(nums, k) {
    
    let n = nums.length
    
    if(n == 1) {
        if(k%2 === 0 ) {
            return nums[0]
        } else {
            return -1
        }
    } else if(k < n) {
        let max = -1
        for(let i = 0; i < k - 1; i++) {
            max = Math.max(max,nums[i])
        }
        return Math.max(max,nums[k])
    } else if( k == n) {
        let max = -1
        for(let i = 0; i < k - 1 ; i++) {
            max = Math.max(max,nums[i])
        }
        return max
    } else {
        let max = -1
        for(let i = 0; i < n ; i++) {
            max = Math.max(max,nums[i])
        }
        return max
    }
};