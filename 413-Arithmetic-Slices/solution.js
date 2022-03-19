/**
 * @param {number[]} nums
 * @return {number}
 */
 var numberOfArithmeticSlices = function(nums) {
    let count = 0
    let start = 0
    while(start + 2 <= nums.length - 1) {
        let i = start
        let first = nums[i]
        let second = nums[i+1]
        let third = nums[i+2]        
        if(second-first === third-second) {
            count++
            let diff = second - first
            i = i + 3
            while( i < nums.length && (nums[i] - nums[i-1]) == diff)  {
                count++
                i++
            }  
        }
        start = start + 1
    }
    return count
};