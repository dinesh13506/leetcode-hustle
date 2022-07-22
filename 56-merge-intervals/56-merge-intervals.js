/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b) => {
        if(a[0] < b[0]) {
            return -1
        }
        else if(a[0] == b[0] && a[1] < b[1]) {
            return -1
        } else {
            return 1
        }
    })
    //console.log(intervals)
    let mergedIntervals = []
    if(intervals.length <= 0) return mergedIntervals
    let tempinterval = intervals[0]
    for(let interval of intervals) {
        if(interval[0] <= tempinterval[1]) {
            tempinterval[0] = Math.min(interval[0], tempinterval[0])
            tempinterval[1] = Math.max(interval[1], tempinterval[1])
        } else {
            mergedIntervals.push(tempinterval)
            tempinterval = interval
        }
    }
    mergedIntervals.push(tempinterval)
    return mergedIntervals
};