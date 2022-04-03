/**
 * @param {string} text
 * @return {string}
 */
var arrangeWords = function(text) {
    
    let arr = text.toLowerCase().split(" ")
    arr.sort(function(a,b) {
        if(a.length == b.length) {
            return 0
        }
        return a.length - b.length
    })
    arr[0] = arr[0][0].toUpperCase() + arr[0].slice(1)
    return arr.join(" ")
    
};