/**
 * @param {string} s
 * @return {number}
 */
var minimumKeypresses = function(s) {
   
    let map = new Map()
    for(let ch of s) {
        map.set(ch, (map.get(ch) || 0) + 1)
    }
    let arr = [...map.keys()]
    arr.sort(function(a,b) {
        if(map.get(a) == map.get(b)) {
            return 0
        } else if(map.get(a) > map.get(b)) {
            return -1
        } else {
            return 1
        }
    })
    //console.log(arr,map)
    let press = 1
    let ans = 0
    for(let i = 0; i < arr.length; i++) {
        if( i > 0 && i % 9 == 0) {
            press++
        }
        ans = ans + (map.get(arr[i]) * press)
    }
    return ans
};