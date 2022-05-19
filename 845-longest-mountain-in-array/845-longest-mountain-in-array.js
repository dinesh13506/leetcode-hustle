/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function(arr) {
    
    let n = arr.length
    let dp1 = new Array(n)
    dp1.fill(1)
    let dp2 = new Array(n)
    dp2.fill(1)
    
    
    for(let i = 1; i < n; i++) {
        let curr = i
        let prev = i - 1
        if(arr[curr] > arr[prev]) {
            dp1[curr] = dp1[prev] + 1
        } else {
             dp1[curr] = 1
        }
    }
    
    
    for(let  i = n-2; i >=0; i--) {
        let curr = i
        let next = i + 1
        if(arr[next] < arr[curr]) {
            dp2[curr] = dp2[next] + 1
        } else {
            dp2[curr] = 1
        }
    }
    
    //console.log(dp1, dp2)
    
    let maxLen = 0
    for(let i = 0; i < n; i++) {
        if(dp1[i] > 1 && dp2[i] > 1) {
            maxLen = Math.max(maxLen, dp1[i] + dp2[i] - 1)
        }
    }
    
    return maxLen
    
};