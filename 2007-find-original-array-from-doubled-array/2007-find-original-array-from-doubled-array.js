/**
 * @param {number[]} changed
 * @return {number[]}
 */
var findOriginalArray = function(changed) {
    
    const orig = []
    const n = changed.length
    if(n%2 != 0) {
        return orig
    }
    let map = new Map()
    for(let num of changed) {
        let count = map.get(num) || 0
        count++
        map.set(num, count)
    }
    changed.sort((a,b) => {return a - b})
    //console.log(changed, map)
    let temp = []
    for(let num of changed) {
        if(map.get(num) == 0) continue
        let double = 2 * num
        //console.log(map.get(num), map.get(2 * num))
        if(map.get(num) > 0 &&  map.get(double) > 0) {
            temp.push(num)
            map.set(num, map.get(num) - 1)
            map.set(double, map.get(double) - 1)
        } else {
            return orig
        }
    }
    //console.log(map)
    for(let key of map.keys()) {
        if(map.get(key) > 0) return orig 
    }
    return temp
    
    
};