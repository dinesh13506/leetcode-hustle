/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
const test = require('@datastructures-js/priority-queue');

var findClosestElements = function(arr, k, x) {
    
    const input = [], n = arr.length
    for(let i = 0; i < n; i++) {
        input.push({
            "value" : arr[i],
            "dist" : Math.abs(arr[i] - x)
        })
    }
    //console.log(input)
    input.sort((a,b) => {
            if(a.dist == b.dist) {
                return a.value - b.value
            } else {
                return a.dist - b.dist
            }
    })
    
    let ans = []
    for(let i = 0; i < k; i++) {
        ans.push(input[i].value)
    }
    ans.sort((a,b) =>  { return a - b })
    return ans

};