/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfBeauties = function(nums) {
    
    let maxfromleft = []
    let max = 0
    for(let i = 0; i < nums.length; i++) {
        max = Math.max(nums[i], max)
        maxfromleft.push(max)
    }
    
    let minfromright = []
    let min  = Infinity
    for(let i = nums.length-1; i >= 0; i--) {
        min = Math.min(nums[i], min)
        minfromright.push(min)
    }
    minfromright.reverse()
    
    // console.log(nums)
    // console.log(maxfromleft)
    // console.log(minfromright)
    let n = nums.length
    let beauty = 0
    for(let i = 1; i <= n-2; i++) {
        let max = maxfromleft[i-1]
        let min = minfromright[i+1]
        if(nums[i] > max && nums[i] < min) {
            beauty = beauty + 2
        } else if(nums[i-1] < nums[i] && nums[i] < nums[i+1]) {
            beauty = beauty + 1
        }
    }
    return beauty
};