/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
    
    let i = 0, j = 0
    let m = firstList.length, n = secondList.length
    let result = []
    while(i < m && j < n) {
        let low = Math.max(firstList[i][0], secondList[j][0])
        let high = Math.min(firstList[i][1], secondList[j][1])
        if(low <= high) {
            result.push([low,high])
        }
        
        if(firstList[i][1] <= secondList[j][1] ) {
            i++
        } else {
            j++
        }
    }
    return result
};