/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
   
    let posidx = 0, negidx = 1
    let ans = new Array(nums.length)
    for(let num of nums) {
        if(num > 0) {
            ans[posidx] = num
            posidx = posidx + 2
        } else {
            ans[negidx] = num
            negidx = negidx + 2
        }
    }
    return ans
};