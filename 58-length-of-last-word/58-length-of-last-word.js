/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let arr = s.trim().split(" ").map(function(p) { return p.trim()}).filter(function(p) {
        return p.length > 0
    })
    //console.log(arr)
    return arr[arr.length-1].length
};