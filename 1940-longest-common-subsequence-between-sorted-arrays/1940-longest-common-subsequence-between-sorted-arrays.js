/**
 * @param {number[][]} arrays
 * @return {number[]}
 */
var longestCommonSubsequence = function(arrays) {
    
    let prevarr = arrays[0]
    let prevset = new Set()
    for(let num of prevarr) {
        prevset.add(num)
    }
    
    let ans = []
    for(let i = 1; i < arrays.length; i++) {
        ans = []
        let currarr = arrays[i]
        let currset = new Set()
        for(let num of currarr) {
            if(prevset.has(num)) {
                currset.add(num)
                ans.push(num)
            }
        }
        prevset = currset
        prevarr = ans
    }
    return prevarr
};