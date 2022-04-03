/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
    
    let ans = 0
    for(let num1 of arr1) {
        let c = 1
        for( let num2 of arr2) {
            if(Math.abs(num1-num2) <= d) {
                c = 0
                break
            }
        }
        ans = ans + c
    }
    return ans
};