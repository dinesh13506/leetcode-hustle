/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    
    let n = nums.length
    let actual_sum = parseInt(  n * ( ( n + 1 ) / 2 ) )
    let given_sum = 0
    for( let num of nums ) {
        given_sum = given_sum + num
    }
    return actual_sum - given_sum
};