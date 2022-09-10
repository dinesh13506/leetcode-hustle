/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
    
    envelopes.sort((a,b) => {
        if(a[0] == b[0]) return b[1] - a[1]
        return a[0] - b[0]
    })
    
    let heights = []
    for(let env of envelopes) {
        heights.push(env[1])
    }
    let temp = []
    temp.push(heights[0])
    
    let bs = (target) => {
        let start = 0, end = temp.length-1
        let ans = null
        while(start <= end) {
            let mid = start + parseInt((end - start)/2)
            let curr = temp[mid]
            if(curr == target) {
                ans = mid
                break
            }
            else if(target < curr) {
                ans = mid
                end = mid - 1
            } else {
                start = mid + 1
            }
        }
        return ans
    }
    
    
    for(let i = 1; i < heights.length; i++) {
        let curr = heights[i]
        let last = temp[temp.length-1]
        if(curr > last) {
            temp.push(curr)
        } else {
            let idx = bs(curr)
            temp[idx] = curr
        }
    }
    return temp.length
};