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
    
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            let part1 = prefixsum[i]
            let part2 = prefixsum[j] - prefixsum[i]
            let part3 = j != arr.length - 1 ? total - prefixsum[j] : null
            //console.log(part1, part2, part3, i, j)
            if(part1 == part2 && part2 == part3 && part3 == part1 && part1 == sum) {
                return true
            }
        }
    }
    return false
    
};