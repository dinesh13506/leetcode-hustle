/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(arr) {
    arr.sort((a,b) => {return a - b })
    const x = 0
    const k = 1
    const ans = []
    const n = arr.length
    let left = 0 , right = n - 1
    let getDistance = (i) => {
        return Math.abs(arr[i] - x)
    }
    while(right - left + 1 > k) {
        let ld = getDistance(left), rd = getDistance(right)
        if(ld == rd) {
            left++
        } else if(ld < rd) {
            right--
        } else {
            left++
        }
    }
    
    return arr[left]
};