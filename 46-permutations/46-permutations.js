/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    
    let n = nums.length
    let visited = new Map()
    let results = []
    let temp = []
    
    let backtrack = function(temp) {
        
        if(temp.length === n) {
            results.push(temp.slice())
            return
        }
        
        for(let i = 0; i <n; i++) {
            if(visited.has(i) === false) {
                visited.set(i,true)
                temp.push(nums[i])
                backtrack(temp)
                visited.delete(i)
                temp.pop()
            }
        }
    }
    
    backtrack(temp)
    return results
};