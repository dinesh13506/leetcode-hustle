/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {

    let arr = []
    for(let s of score) {
        arr.push(s)
    }
    
    arr.sort(function(a,b) { return b - a })
    //console.log(arr)
    let map = new Map()
    for(let i = 0; i < arr.length; i++) {
        if( i== 0) {
            map.set(arr[i],"Gold Medal")
        } else if( i== 1) {
            map.set(arr[i],"Silver Medal")
        } else if(i == 2) {
            map.set(arr[i],"Bronze Medal")
        } else {
            map.set(arr[i],  `${i+1}`)
        }
    }
    //console.log(map)
    let result = []
    for(let s of score) {
        result.push(map.get(s))
    }
    return result
};