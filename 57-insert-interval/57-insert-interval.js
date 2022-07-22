/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let afterInsert = [], insertflag = false
    if(intervals.length == 0) return [newInterval]
    intervals.push(newInterval)
    
    intervals.sort((a,b) => {
        if(a[0] < b[0]) {
            return -1
        } else if(a[0] == b[0] && a[1] < b[1]) {
            return -1
        } else {
            return 1
        }
    })
    //console.log(intervals)
    
    let tempinterval = intervals[0]
    let mergedIntervals = []
    for(let interval of intervals) {
        if(interval[0] <= tempinterval[1]) {
            tempinterval[0] = Math.min(tempinterval[0], interval[0])
            tempinterval[1] = Math.max(tempinterval[1], interval[1])
        } else {
            mergedIntervals.push(tempinterval)
            tempinterval = interval
        }
    }
    mergedIntervals.push(tempinterval)
    return mergedIntervals
};