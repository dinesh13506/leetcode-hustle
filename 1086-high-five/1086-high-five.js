/**
 * @param {number[][]} items
 * @return {number[][]}
 */
var highFive = function(items) {
    
    let map = new Map()
    for(let item of items) {
        let id = item[0]
        let score = item[1]
        if(map.has(id)) {
            let scoreList = map.get(id)
            scoreList.push(score)
            map.set(id,scoreList)
        } else {
            let scoreList = []
            scoreList.push(score)
            map.set(id,scoreList)
        }
    }
    
    let result = []
    let ids = map.keys()
    for(let id of ids) {
        let scoreList = map.get(id)
        scoreList.sort(function(a,b) { return b - a})
        let sum = 0
        for(let i = 0; i < 5; i++) {
            sum = sum + scoreList[i]
        }
        result.push([id,parseInt(sum/5)])
    }
    result.sort(function(a,b) { return a[0] - b[0]})
    return result
};

//Time complexity : O(ids * nlogn)
//Space Complexity : O(ids * n)