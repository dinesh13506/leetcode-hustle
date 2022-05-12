/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    
    let visited = new Map()
    let results = [], temp = []
    let countMap = new Map()
    let n = nums.length
    
    for(let i = 0; i < n; i++) {
        let count = countMap.get(nums[i]) || 0
        count++
        countMap.set(nums[i],count)
    }
    
    let backtrack = function(temp) {
        
        if(temp.length === n) {
            results.push(temp.slice())
            return 
        }
        for(let num of countMap.keys()) {
            if(countMap.get(num) === 0) {
                continue
            }
            let count = countMap.get(num)
            temp.push(num)
            countMap.set(num,count-1)
            backtrack(temp)
            temp.pop()
            countMap.set(num,count)
        }
    }
    
    backtrack(temp)
    return results
};