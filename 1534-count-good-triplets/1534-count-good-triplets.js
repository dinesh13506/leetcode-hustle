/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function(arr, a, b, c) {
    
    let count = 0
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            for(let k = j + 1; k < arr.length ; k++) {
                let cond1 = Math.abs(arr[i] - arr[j]) <= a
                let cond2 = Math.abs(arr[j] - arr[k]) <= b
                let cond3 = Math.abs(arr[k] - arr[i]) <= c
                if(cond1 && cond2 && cond3) {
                    count++
                }
            }
        }
    }
    //console.log(count)
    return count
};