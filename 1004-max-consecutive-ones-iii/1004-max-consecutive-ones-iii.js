/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let n = nums.length
    let freq = new Array(2)
    freq.fill(0)
    let start = 0, end = 0, maxlen = 0
    for(end = 0; end < n; end++) {
        freq[nums[end]]++
        let zeroes = freq[0]
        while(zeroes > k) {
            freq[nums[start]]--
            start++
            zeroes = freq[0]
        }
        maxlen = Math.max(maxlen, end - start + 1)
    }
    return maxlen
};