/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function(logs) {
    let map = new Map()
    for(let log of logs) {
        let birth = log[0]
        let death = log[1]
        for(let i = birth; i < death; i++) {
            map.set(i, (map.get(i) || 0) + 1)
        }
    }
    
    let arr = []
    for(let year of map.keys()) {
        arr.push([year, map.get(year)])
    }
    arr.sort(function(a,b) {
        if(b[1] == a[1]) {
            return a[0] - b[0]
        }
        return b[1] - a[1]
    })
    return arr[0][0]
};