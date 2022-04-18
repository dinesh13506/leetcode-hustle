/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {
    
    intervals.sort(function(a,b) {
        //if start time are same, keep end time before
        if(a[0] == b[0]) {
            return b[1] - a[1]
        }
        return a[0] - b[0]
    })
    
    let prev_end = 0
    let curr_end = 0
    let ans = 0
    for(let int of intervals) {
        curr_end = int[1]
        if(curr_end > prev_end) {
            ans++
            prev_end = curr_end
        }
    }
    return ans
};