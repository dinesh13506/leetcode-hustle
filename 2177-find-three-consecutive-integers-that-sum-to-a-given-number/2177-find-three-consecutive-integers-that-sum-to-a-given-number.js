/**
 * @param {number} num
 * @return {number[]}
 */
var sumOfThree = function(num) {
   
    let start = 0, end = num
    while(start <= end) {
        let mid = start + parseInt((end - start) / 2)
        let value = 3 * mid
        if(value == num) {
            return [mid-1, mid, mid +1]
        }
        else if(value < num) {
            start = mid + 1
        } else {
            end = mid - 1
        }
    }
    return []
};