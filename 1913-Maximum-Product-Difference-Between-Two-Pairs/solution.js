/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProductDifference = function(nums) {
    
    let largest = nums[0]
    let secondLargest = -Infinity
    let smallest = nums[0]
    let secondSmallest = Infinity
    let length = nums.length
    for(let i = 1; i < length; i++) {
        if(nums[i] > largest) {
            secondLargest = largest
            largest = nums[i]
        } else if(nums[i] > secondLargest) {
            secondLargest = nums[i]
        }
        if(nums[i] < smallest) {
            secondSmallest = smallest
            smallest = nums[i]
        } else if(nums[i] < secondSmallest) {
            secondSmallest = nums[i]
        }
    }
    return (largest*secondLargest) - (smallest*secondSmallest)
};