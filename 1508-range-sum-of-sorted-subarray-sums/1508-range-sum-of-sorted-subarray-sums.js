/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function(nums, n, left, right) {
    
    let prefixSum = []
    for(let i = 0; i < n; i++) {
        let sum = 0
        for(let j = i; j < n; j++) {
            sum = sum + nums[j]
            prefixSum.push(sum)
        }
    }
    prefixSum.sort(function(a,b) {
        if(a > b) {
            return 1
        } else if(a < b) {
            return -1
        }
        return 0
    })
    
    let ans = 0
    const mod = Math.pow(10,9) + 7
    for(let i = left-1; i <= right - 1; i++) {
        ans = (ans + prefixSum[i]) % mod
    }
    return ans
};