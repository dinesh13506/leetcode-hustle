/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    
    let set = new Set()
    for(let num of arr) {
        if(set.has(num) == false) set.add(num)
    }
    
    let nums = [...set]
    nums.sort((a,b) => {return a - b})
    let rank = 1
    let ans = []
    let map = new Map()
    for(let num of nums) {
        map.set(num, rank++)
    }
    
    for(let a of arr) {
        ans.push(map.get(a))
    }
    return ans
};