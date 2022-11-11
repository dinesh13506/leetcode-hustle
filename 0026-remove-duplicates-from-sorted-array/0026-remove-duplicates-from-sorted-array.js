/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let p1 = 0; //will count unique elements
    for(let i = 0; i < nums.length; i++) {
        if(i == 0) {
            nums[p1] = nums[i];
            p1++;
            continue;
        } else if(nums[i] != nums[i-1]) {
            nums[p1] = nums[i];
            p1++;
        }
    }
    //console.log(counter, nums);
    return p1;
};