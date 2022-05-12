/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    
    let visited = new Map()
    let results = [], temp = []
    let resultsMap = new Map()
    let n = nums.length
    
    let backtrack = function(temp) {
        
        if(temp.length === n) {
            let str = temp.slice().join("*")
            if(resultsMap.has(str) === false) {
                resultsMap.set(str, true)
                results.push(temp.slice())
            }
            return 
        }
        
        for(let i = 0; i < n; i++) {
            if(visited.has(i) === false) {
                visited.set(i, true)
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