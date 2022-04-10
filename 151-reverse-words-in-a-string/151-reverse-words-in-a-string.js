/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    
    let arr = s.trim().split(" ").filter(value =>  value.length > 0 )
    //console.log(arr)
    let i = 0, j = arr.length - 1
    while(i < j) {
        [arr[i],arr[j]] = [arr[j],arr[i]]
        i++
        j--
    }
    return arr.join(" ")
    
};