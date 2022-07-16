/**
 * @param {number} n
 * @return {boolean}
 */
var confusingNumber = function(n) {
    
    let map = new Map()
    map.set('0','0')
    map.set('1','1')
    map.set('8','8')
    map.set('6','9')
    map.set('9','6')
    
    let arr = ("" + n).split('').reverse()
    //console.log(arr)
    let newarr = []
    for(let d of arr) {
        if(!map.get(d)) {
            return false
        }
        newarr.push(parseInt(map.get(d)))
    }
    if(n == parseInt(newarr.join(''))) {
        return false
    }
    return true
    
};