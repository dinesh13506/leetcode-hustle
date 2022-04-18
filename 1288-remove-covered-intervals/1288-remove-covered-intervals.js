/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {
    
    intervals.sort(function(a,b) {
        if(a[0] - b[0] == 0) {
            return b[1] - b[1]
        }
        return b[0] - a[0]
    })
    //console.log(intervals)
    let covered = 0
    for(let i = 0; i < intervals.length; i++) {
        let int1 = intervals[i]
        for(let j = i + 1; j < intervals.length; j++) {
            let int2 = intervals[j]
            if( (int2[0] <= int1[0]) &&  (int1[1] <= int2[1]) ) {
                //console.log(int1,int2)
                covered++
                break
            }
        }
    }
    //console.log(covered)
    return intervals.length - covered
};