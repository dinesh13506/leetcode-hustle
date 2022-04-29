/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    
    let subsets = []
    let backtrack = function(index,current) {
        subsets.push(current.slice())
        for(let i = index; i < nums.length; i++) {
            current.push(nums[i])
            backtrack(i+1,current)
            current.pop()
        }
    }
    let current = []
    backtrack(0,current)
    return subsets
};