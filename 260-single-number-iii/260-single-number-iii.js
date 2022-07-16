/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let xor = 0
    for(let num of nums) {
        xor = xor ^ num
    }
    
    let rtMostBitSetNum = xor & ( -xor )
    let ans = [0,0]
    for(let num of nums) {
        if( (num & rtMostBitSetNum) == 0) {
            ans[0] = ans[0] ^ num
        } else {
            ans[1] = ans[1] ^ num
        }
    }
    return ans
};