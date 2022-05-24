/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    
    let n = candidates.length
    let combinations = []
    let f = function(index, target, combination) {
        if(index == n) {
            if(target == 0) {
                combinations.push(combination.slice())
                return
            } else {
                return
            }
        }
        //take
        if(candidates[index] <= target) {
            combination.push(candidates[index])
            f(index, target - candidates[index], combination)
            //not take
            combination.pop()
            f(index + 1, target, combination)
        } else {
            f(index + 1, target, combination)
        }
        
    }
    
    f(0, target, [])
    return combinations
 };