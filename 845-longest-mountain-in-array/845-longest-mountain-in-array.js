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
    
    
    let i = 1, j = n - 2
    while( i < n && j >= 0) {
        let curr1 = i
        let prev = i - 1
        let curr2 = j
        let next = j + 1
        if(arr[curr1] > arr[prev]) {
            dp1[curr1] = dp1[prev] + 1
        }
        
        if(arr[curr2] > arr[next]) {
            dp2[curr2] = dp2[next] + 1
        }
        i++
        j--
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