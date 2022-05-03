/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    
    let sorted = nums.slice()
    sorted.sort(function(a,b) {
        if(a < b) {
            return -1
            
        } else if( a > b ) {
            return 1
        } else {
            return 0
        }
    })
    
    //console.log(nums)
    //console.log(sorted)
    let start = -1, end = -1
    for(let i = 0; i < nums.length; i++) {
        if(sorted[i] != nums[i]) {
            if(start <= -1) {
                start = i
            } else {
                end = i
            }  
        }
    }
    //console.log(start, end)
    if(start <= -1) {
        return 0
    }
    return end - start + 1
};