/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    if(nums.length == 1) {
        return
    }
    let i = nums.length-2
    while(i>=0) {
        if(nums[i] < nums[i+1]) {
            break
        }
        i--
    }
    if(i < 0) {
        nums.sort(function(a,b) {return a - b})
        return
    }
    //console.log(nums[i],i)
    let j = nums.length - 1
    while(j >= 0 ) {
        if(nums[j] > nums[i]) {
            break
        }
        j--
    }
    [nums[i],nums[j]] = [nums[j],nums[i]]
    //console.log(nums)
    
    let p1 = i+1
    let p2 = nums.length -1
    while(p1 < p2) {
        [nums[p1],nums[p2]] = [nums[p2],nums[p1]]
        p1++
        p2--
    }
};