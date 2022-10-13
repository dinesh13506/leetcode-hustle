/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const n = nums.length;
   
    let result = []
    let backtrack = (output) => {
        
        if(output.length >= n) {
            //console.log(output);
            result.push(output.slice());
            return;
        }
        
        for(let i = 0; i < n; i++) {
            if(output.includes(nums[i])) {
                continue
            }
            output.push(nums[i]);
            backtrack(output);
            output.pop();
        }
    }
    
    backtrack([]);
    return result;
};