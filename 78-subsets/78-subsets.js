/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let subsets = []
    
    let backtrack = function(i,current) {
        if(i>=nums.length) {
            subsets.push(current.slice())
            return
        }
        current.push(nums[i])
        backtrack(i+1,current)
        current.pop()
        backtrack(i+1,current)
    }
    
    let current= []
    backtrack(0,current)
    return subsets
};