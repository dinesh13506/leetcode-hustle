/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    
    intervals.sort(function(a,b) { return a[0] - b[0] })
    if(intervals.length === 0) {
        return true
    }
    let prev = intervals[0]
    for(let i = 1; i < intervals.length; i++) {
        let curr = intervals[i]
        let prevEnd = prev[1]
        let currStart = curr[0]
        if(currStart < prevEnd) {
             return false
        }
        prev = curr
    }
    return true
};