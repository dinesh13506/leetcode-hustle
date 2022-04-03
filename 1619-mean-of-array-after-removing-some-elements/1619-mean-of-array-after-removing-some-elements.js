/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
    
    let n = arr.length
    let x = parseInt((5 * n)/100)
    arr.sort(function(a,b) { return a - b})
    let sum = 0, count = 0
    for(let i = x ; i < n - x ; i++) {
        sum = sum + arr[i]
        count++
    }
    return sum/count
};