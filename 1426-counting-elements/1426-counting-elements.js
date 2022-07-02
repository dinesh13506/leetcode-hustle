/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function(arr) {
    
    let freq = new Map()
    for(let num of arr) {
        let count = freq.get(num) || 0
        count++
        freq.set(num, count)
    }
    
    let count = 0
    for(let num of freq.keys()) {
        if(freq.has(num + 1)) {
            count += freq.get(num)
        }
    }
    return count
};