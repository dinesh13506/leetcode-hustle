/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
    
    intervals.sort(function(a,b) {return a[0] - b[0]})
    //console.log(intervals)
    let result = []
    for(let i = 0; i < intervals.length; i++) {
        if(result.length <=0) {
            result.push(intervals[i])
        } else if(intervals[i][0] > result[result.length - 1][1]) { //if start time of new interval is greater than end time of prev one, then we cannot merge so push
            result.push(intervals[i])
        } else {
            result[result.length - 1][1] = Math.max(intervals[i][1],result[result.length - 1][1])
        }
    }
    return result
};