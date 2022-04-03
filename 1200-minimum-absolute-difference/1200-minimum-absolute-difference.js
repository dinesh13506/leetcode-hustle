/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    let pairs = []
    let diff = Infinity
    arr.sort(function(a,b) { return a - b })
    for(let i = arr.length - 2; i >=0 ; i--) {
        diff = Math.min(diff,Math.abs(arr[i] - arr[i+1]))
    }
    //console.log(diff)
    for(let i = 1; i < arr.length; i++) {
        if(Math.abs(arr[i] - arr[i-1]) === diff) {
            pairs.push([arr[i-1],arr[i]])
        }
    }
    return pairs
};