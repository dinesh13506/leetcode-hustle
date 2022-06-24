/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    
    let copy = nums.slice()
    copy.sort((a,b) => {
        return a - b
    })
    
    let j = 0, k =  nums.length & 1 ? parseInt((nums.length)/2) + 1 : parseInt((nums.length)/2)
    for(let i = nums.length - 1; i >=0; i--) {
        nums[i] = copy[i&1 ? k++ : j++]
    }
};