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
    
    let max = 0, earlistyear = Infinity
    for(let year of map.keys()) {
        let count = map.get(year)
        if(count >= max) {
            max = count
        }
    }
   
    for(let year of map.keys()) {
        let count = map.get(year)
        if(count == max) {
            max = count
            earlistyear = Math.min(earlistyear, year)
        }
    }
    return earlistyear
};