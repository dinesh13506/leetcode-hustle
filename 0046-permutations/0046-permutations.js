/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const n = nums.length;
    let swap = (i,j) => {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
    
    let output = []
    let backtrack = (first) => {
        
        if(first >= n) {
            //console.log(nums);
            output.push(nums.slice());
            return;
        }
        
        for(let i = first; i < n; i++) {
            swap(first, i )
            backtrack(first + 1)
            swap(first, i)
        }
    }
    
    backtrack(0);
    return output;
};