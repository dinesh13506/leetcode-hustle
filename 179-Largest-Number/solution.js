/**
 * @param {number[]} nums
 * @return {string}
 */
 var largestNumber = function(nums) {
    
    let stringNums = []
    for(let num of nums) {
        stringNums.push(num+"")
    }
    stringNums.sort(function(s1,s2) {
        let op1 = s1 + s2
        let op2 = s2 + s1
        return op2.localeCompare(op1)
    })
    let ans = stringNums.join('')
    return ans && ans[0] == '0' ? '0' : ans
};