/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    
    // let arr = [];
    // let set = new Set();
    // for(let num of nums) {
    //     if(set.has(num)) {
    //         continue;
    //     }
    //     arr.push(num);
    // }
    
    let first = -Infinity;
    let second = -Infinity;
    let third = -Infinity;
    
    for(let num of nums) {
        if(num > first) {
            third = second;
            second = first;
            first = num;
        } else if(num < first && num > second) {
            third = second;
            second = num;
        } else if(num < second && num > third) {
            third = num;
        }
    }
    
    return third == -Infinity ? first : third;
    
};