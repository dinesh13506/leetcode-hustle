/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let n = nums.length
    let answer = []
    let backtrack = (curr, list) => {
        if(curr >= n) {
            answer.push(list.slice())
            return 
        }
        
        //take
        list.push(nums[curr])
        backtrack(curr+1, list)
        //not take
        list.pop()
        backtrack(curr+1, list)
    }
    
    backtrack(0,[])
    return answer
};