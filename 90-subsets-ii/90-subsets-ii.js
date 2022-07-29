/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
   
    nums.sort((a,b) => { return a - b })
    const n = nums.length
    let answer = []
    let set = new Set()
    let backtrack = (curr, list) => {
        if(curr >= n) {
            let str = list.slice().join(',')
            if(set.has(str) == false) {
                answer.push(list.slice())
                set.add(str)
            }
            return
        }
        list.push(nums[curr])
        backtrack(curr+1, list)
        list.pop()
        backtrack(curr+1, list)
    }
    backtrack(0,[])
    //console.log(answer)
    return answer
};