/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    
    let left = []
    let right = []
    
    let smallest_on_left = Infinity
    for(let i = 0; i < nums.length; i++) {
        left[i] = smallest_on_left
        smallest_on_left = Math.min(smallest_on_left, nums[i])
    }
    let largest_on_right = -Infinity
    for(let i = nums.length - 1; i >=0; i--) {
        right[i] = largest_on_right
        largest_on_right = Math.max(largest_on_right, nums[i])
    }
    //console.log(left, right)
    for(let i = 0; i < nums.length; i++) {
        if(left[i] < nums[i] && nums[i] < right[i]) {
            return true
        }
    }
    return false
};