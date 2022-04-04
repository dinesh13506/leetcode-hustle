/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
var sortJumbled = function(mapping, nums) {
    
    let getMappedNum = function(num) {
        let s = "" + num
        let op = ""
        for(let ch of s) {
            let d = parseInt(ch)
            op = op + mapping[d]
        }
        return op
    }
    nums.sort(function(a,b) {
        let a1 = getMappedNum(a)
        let b1 = getMappedNum(b)
        if(parseInt(a) == parseInt(b)) {
            return 0
        }
        return parseInt(a1) - parseInt(b1)
    })
    return nums
};