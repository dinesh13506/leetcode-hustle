/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function getLowestIndex(nums, target){
    const n = nums.length;
    let low = 0;
    let high = n - 1;
    let lowestIndex = Infinity;
    
    while(low <= high) {
        let mid = low + parseInt((high - low) / 2); 
        if(nums[mid] == target) {
            if(mid < lowestIndex) {
                lowestIndex = mid;
            }
            high = mid - 1;
        } else if(target < nums[mid]) {
            high = mid - 1;
        } else if(target > nums[mid]) {
            low = mid + 1;
        }
    }
    
    return lowestIndex == Infinity ? -1 : lowestIndex;
}


function getHighestIndex(nums, target) {
    const n = nums.length;
    let low = 0;
    let high = n - 1;
    let highestIndex = -Infinity;
    
    while(low <= high) {
        let mid = low + parseInt((high - low) / 2); 
        if(nums[mid] == target) {
            if(mid > highestIndex) {
                highestIndex = mid;
            }
            low = mid + 1;
        } else if(target < nums[mid]) {
            high = mid - 1;
        } else if(target > nums[mid]) {
            low = mid + 1;
        }
    }
    
    return highestIndex == -Infinity ? -1 : highestIndex;
}


var searchRange = function(nums, target) {
    
    return [getLowestIndex(nums, target), getHighestIndex(nums, target)]
    
    
};