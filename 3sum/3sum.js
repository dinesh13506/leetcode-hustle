/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
   
    let res = []
    let length = nums.length
    nums.sort( function( a, b ) { return a - b })
    //console.log( nums )
    for( let i = 0; i <= length - 3; i++ ) {
        
        if( i > 0 && nums[i] == nums[i-1]) continue
        let num = nums[i]
        let rem = 0 - num
        
        let start = i + 1
        let end = length - 1
        while( start < end ) {
           
            if( nums[start] + nums[end] == rem ) {
                res.push( [ num, nums[start], nums[end]])
                while( start < end && ( nums[start] == nums[start + 1] ) ) {
                    start++
                }
                while( start < end && (nums[end] == nums[end - 1]) ) {
                    end--
                }
                start++
                end--
            } else if( nums[start] + nums[end] < rem ) {
                start++
            }
            else {
                end--
            }
        }
    }
    return res
};