/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(nums, queries) {
    
    let total = 0
    for(let num of nums) {
        if( num % 2 == 0 ) {
            total += num
        }
    }
    
    let mod = (m,n) => {
        return ((m % n) + n) % n
    }
    
    let ans = []
    for(let query of queries) {
        let [value, idx] = query
        let valMod = mod(value, 2)
        let numMod = mod(nums[idx], 2)
        if(numMod == 0) {
            total -= nums[idx]
        }
        nums[idx] += value
        numMod = mod(nums[idx], 2)
        if(numMod == 0) {
            total += nums[idx]
        }
        ans.push(total)
    }
    return ans
};