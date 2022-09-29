/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */

var findClosestElements = function(arr, k, x) {
    
    const ans = []
    const n = arr.length
    let left = 0 , right = n - 1
    let getDistance = (i) => {
        return Math.abs(arr[i] - x)
    }
    while(right - left + 1 > k) {
        let ld = getDistance(left), rd = getDistance(right)
        if(ld == rd) {
            right--
        } else if(ld < rd) {
            right--
        } else {
            left++
        }
    }
    for(let i = left; i <= right; i++) {
        ans.push(arr[i])
    }
    return ans
};