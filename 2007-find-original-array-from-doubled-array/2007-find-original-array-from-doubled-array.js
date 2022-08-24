/**
 * @param {number[]} changed
 * @return {number[]}
 */
var findOriginalArray = function(changed) {
    
    let map = new Map()
    for(let num of changed) {
        let count = map.get(num) || 0
        count++
        map.set(num, count)
    }
    changed.sort((a,b) => {
        return a - b
    })
    
    if(map.has(0) && map.get(0) % 2 != 0) {
        return []
    }
    const n = changed.length
    let ansmap = new Map()
    for(let i = 0; i < n; i++) {
        let x = changed[i], y = 2 * x
        if(x == 0 || y == 0) {
            continue
        }
        if(map.has(x) == false || map.get(x) <= 0) {
            continue
        }
        if(map.has(y) == false || map.get(y) <= 0) {
            return []
        }
        let min = Math.min(map.get(x),map.get(y))
        ansmap.set(x, (ansmap.get(x) || 0) + min)
        map.set(x, map.get(x) - min)
        map.set(y, map.get(y) - min)
    }
    //console.log(ansmap)
    let ans = []
    if(map.has(0)) {
        let count = map.get(0) / 2
        while(count> 0) {
            ans.push(0)
            count--
        }
        map.delete(0)
    }
    
    for(let key of ansmap.keys()) {
        let count = ansmap.get(key)
        while(count> 0) {
            ans.push(key)
            count--
        }
    }
    return ans
};