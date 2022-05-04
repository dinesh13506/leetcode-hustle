/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
var arraysIntersection = function(arr1, arr2, arr3) {
    
    let map1 = new Map(), map2 = new Map(), map3 = new Map()
    for(let num1 of arr1) {
        let count = map1.get(num1) || 0
        count++
        map1.set(num1, count)
    }
    for(let num2 of arr2) {
        let count = map2.get(num2) || 0
        count++
        map2.set(num2, count)
    }
    for(let num3 of arr3) {
        let count = map3.get(num3) || 0
        count++
        map3.set(num3, count)
    }
    
    let answer = []
    for(let num of map1.keys()) {
        if(map2.has(num) && map3.has(num)) {
            answer.push(num)
        }
    }
    answer.sort(function(a,b) {
        return a - b
    })
    return answer
    
};