/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    
    let prev = s[0]
    let count = 1
    let arr = []
    for(let i = 1; i < s.length; i++) {
        if(prev!= s[i]) {
            arr.push(count)
            count = 1
            prev = s[i]
        } else {
            count++
        }
    }
    arr.push(count)
    //console.log(arr)
    let ans = 0
    let i = arr.length - 1
    while(i - 1  >= 0) {
       ans = ans +  Math.min(arr[i],arr[i-1])
       i = i - 1
    }
    return ans
};