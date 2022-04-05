/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getStrongest = function(arr, k) {
    
    arr.sort(function(a,b) { return a - b})
    let n = arr.length
    let midx = parseInt( (n-1) / 2 )
    let median = arr[midx]
    //console.log(median)
    
    arr.sort(function(a,b) {
        if(Math.abs(a-median) == Math.abs(b-median)) {
            return b - a
        } 
        return Math.abs(b-median) - Math.abs(a-median)
    })
    
    //console.log(arr)
    let result = []
    let i = 0
    while(i < k) {
        result.push(arr[i])
        i++
    }
    return result
};