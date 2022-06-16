/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    
    let start = newInterval[0], end = newInterval[1]
    let i = 0, n = intervals.length
    let ans = []
    while(i < n && start > intervals[i][1]) {
        ans.push(intervals[i])
        i++
    }
    
    while(i < n && end >= intervals[i][0]) {
        start = Math.min(start, intervals[i][0])
        end = Math.max(end,  intervals[i][1])
        i++
    }
    ans.push([start, end])
    while(i < n) {
        ans.push(intervals[i])
        i++
    }
    return ans
};