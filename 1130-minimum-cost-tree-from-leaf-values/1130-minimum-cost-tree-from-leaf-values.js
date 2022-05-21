/**
 * @param {number[]} arr
 * @return {number}
 */
var mctFromLeafValues = function(arr) {
    
    let n = arr.length
    let memo = new Array(n)
    for(let i = 0; i < n; i++) {
        memo[i] = new Array(n)
        memo[i].fill(-1)
    }
    
    let dp = function(i, j) {
        
        if( i >= j ) {
            return 0
        }
        if(memo[i][j] != -1) {
            return memo[i][j]
        }
        let ans = Infinity
        for(let k = i; k < j; k++) {
            
            //partition1
            let left = 0
            for(let index = i; index <=k; index++) {
                left = Math.max(left, arr[index])
            }
            
            //partition2
            let right = 0
            for(let index = k+1; index <=j; index++) {
                right = Math.max(right, arr[index])
            }
            
            ans = Math.min(ans, (left * right) + dp(i,k) + dp(k+1, j))
            
        }
        memo[i][j] =  ans
        return memo[i][j]
    }
    
   
    return dp(0,n-1)
};