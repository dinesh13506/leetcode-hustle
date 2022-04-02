/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function(nums) {
    let zero = 0, one = 0, two = 0,i = 0
    for(let num of nums) {
        if(num == 0) zero++
        else if(num == 1) one++
        else two++
    }
    while(zero || one || two) {
        if(zero) {
            nums[i] = 0
            zero--
        } else if(one) {
            nums[i] = 1
            one--
        } else {
            nums[i] = 2
            two--
        }
        i++
    }
};