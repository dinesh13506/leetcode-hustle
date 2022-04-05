/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function(nums, k) {
    
    let freqmap = new Map()
    for(let num of nums) {
        let count = freqmap.get(num) || 0
        freqmap.set(num,count + 1)
    }
    nums.sort(function(a,b) { return freqmap.get(a) - freqmap.get(b)})
    let deletions = k
    for(let num of nums) {
        if(deletions <= 0) {
            break
        }
        if(!freqmap.has(num)) {
            continue
        }
        let c = deletions > freqmap.get(num) ? freqmap.get(num) : deletions
        freqmap.set(num,freqmap.get(num) - c)
        if(freqmap.get(num) == 0) {
            freqmap.delete(num)
        }
        deletions = deletions - c
    }
    return freqmap.size
};