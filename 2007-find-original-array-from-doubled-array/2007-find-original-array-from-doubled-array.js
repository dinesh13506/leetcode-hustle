/**
 * @param {number[]} changed
 * @return {number[]}
 */
var findOriginalArray = function(changed) {
    const noResult = []
    const orig = []
    const n = changed.length
    if(n%2 != 0) {
        return noResult
    }
    let map = new Map()
    for(let num of changed) {
        let count = map.get(num) || 0
        count++
        map.set(num, count)
    }
    changed.sort((a,b) => {return a - b})
   
    for(let num of changed) {
        if(map.get(num) == 0) continue
        let double = 2 * num
        if(map.get(num) > 0 &&  map.get(double) > 0) {
            orig.push(num)
            map.set(num, map.get(num) - 1)
            map.set(double, map.get(double) - 1)
        } else {
            return noResult
        }
    }
    for(let key of map.keys()) {
        if(map.get(key) > 0) return noResult 
    }
    return orig
};