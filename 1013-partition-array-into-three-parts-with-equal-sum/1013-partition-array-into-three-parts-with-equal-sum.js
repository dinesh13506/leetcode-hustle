/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function(arr) {
    
    let total = 0
    let prefixsum = []
    for(let num of arr) {
        total += num
        prefixsum.push(total)
    }
    
    if(total % 3 != 0) {
        return false
    }
    
    let sum = total/ 3
    //console.log(prefixsum)
    
    let parts = 0
    for(let i = 0; i < arr.length; i++) {
        if(prefixsum[i] == (parts + 1) * sum) {
            parts++
        }
    }
    return parts>=3
    
};