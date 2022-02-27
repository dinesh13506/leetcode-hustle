/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var targetIndices = function(nums, target) {
    
    nums.sort(function(num1,num2) { return num1-num2})
    let target_index_list = []
    for( let i=0; i<nums.length; i++){
        if(nums[i] == target) {
            target_index_list.push(i)
        }
    }
    
    return target_index_list
};