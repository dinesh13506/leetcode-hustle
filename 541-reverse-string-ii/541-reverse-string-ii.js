/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    
    let arr = s.split('')
    let step = (2 * k)
    for(let i = 0; i < s.length; i = i + step) {
        let start = i, end = Math.min(start + k - 1, s.length -1)
        while(start <= end) {
            let temp = arr[start]
            arr[start] = arr[end]
            arr[end] = temp
            start++
            end--
        }
    }
    return arr.join('')
};