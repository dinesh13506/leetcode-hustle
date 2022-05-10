/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    
    let results = []
    let backtrack = function(start,target,arr) {
        
        if(target === 0 && arr.length === k ) {
            results.push(arr.slice())
            return
        }
        if(target < 0 || arr.length == k) {
            return
        }
        
        
        for(let i = start; i <= 9; i++) {
            arr.push(i)
            backtrack(i+1, target - i, arr)
            arr.pop()
        }
    }
    
    let arr = []
    backtrack(1, n, arr)
    return results
};