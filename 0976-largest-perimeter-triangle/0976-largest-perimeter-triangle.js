/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    nums.sort((a,b) => { return a - b})
    
    for(let i = nums.length -1; i-2 >=0; i--) {
        let a = nums[i];
        let b = nums[i-1];
        let c = nums[i-2]
        const perimeter = a + b + c;
        if( b + c > a) {
            return perimeter;
        }
    }
    return 0
    
};