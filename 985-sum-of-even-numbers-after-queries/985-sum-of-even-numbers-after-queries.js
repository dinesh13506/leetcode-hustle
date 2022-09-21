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
        if( (numMod % 2 == 0) && (valMod == 0) ) {
            total += value
        }
        else if( (numMod % 2 == 1) && (valMod == 1) ) {
            total = total + value + nums[idx]
        }
        else if( (numMod % 2 == 0) && (valMod == 1) ) {
            total -= nums[idx]
        }
        ans.push(total)
        nums[idx] += value
    }
    return ans
};