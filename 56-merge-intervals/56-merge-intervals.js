/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    
    intervals.sort( function(a , b) {
        if(a[0] == b[0]) {
            if(a[1] <= b[1]) {
                return -1
            } else if(a[1] == b[1]) {
                return 0
            } else {
                return 1
            }
        } else {
            if(a[0] < b[0]) {
                return -1
            } else {
                return 1
            }
        }
    })
    
    //console.log(intervals)
    let answer = [intervals[0]]
    for(let i = 1; i < intervals.length; i++) {
        let prevInterval = answer[answer.length-1]
        let currentInterval = intervals[i]
        //console.log(prevInterval,currentInterval)
        //addition
        if(currentInterval[0] > prevInterval[1]) {
            answer.push(currentInterval)
        } else if(currentInterval[0] >= prevInterval[0] &&  currentInterval[1] <= prevInterval[1]) {
            continue
        }
        else if(currentInterval[0] <= prevInterval[1]) {
            answer.pop()
            let mergedInterval = [prevInterval[0],currentInterval[1]]
            answer.push(mergedInterval)
        }
        //console.log(answer)
    }
    return answer
};