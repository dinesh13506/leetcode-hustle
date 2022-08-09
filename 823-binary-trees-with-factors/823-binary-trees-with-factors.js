/**
 * @param {number[]} arr
 * @return {number}
 */
var numFactoredBinaryTrees = function(arr) {
    
    arr.sort((a,b) => { return a - b })
    const mod = 1000000007
    let n = arr.length
    let dp = new Array(n)
    dp.fill(1)
    
    let indexmap = new Map()
    for(let i = 0; i < n; i++) {
        indexmap.set(arr[i], i)
    }
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < i; j++) {
            let left = arr[j]
            let right = arr[i] / left
            //console.log(right)
            if(indexmap.has(right)) {
                dp[i] = (dp[i] + dp[indexmap.get(right)] * dp[j]) % mod
            } 
        }
    }
    
    //console.log(dp)
    let ans = 0
    for(let d of dp) {
        ans = (ans + d) % mod
    }
    return ans
};