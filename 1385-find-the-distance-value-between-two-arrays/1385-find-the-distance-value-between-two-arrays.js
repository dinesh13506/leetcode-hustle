/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
    
    const n = arr1.length;
    arr2.sort((a,b) => { return a - b})
    let count = 0;
    for(let i = 0; i < n; i++) {
        count += 1;
        for(let j = 0; j < arr2.length; j++) {
            let value = Math.abs(arr1[i]  - arr2[j]);
            if(value <= d) {
                count -= 1;
                break;
            }
        }
    }
    return count;
};