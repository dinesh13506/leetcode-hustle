/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
    
    let memo = new Array(strs.length)
    for(let i = 0; i < strs.length; i++) {
        memo[i] = new Array(m+1)
        for(let j = 0; j < m+1; j++) {
            memo[i][j] = new Array(n+1)
            memo[i][j].fill(-1)
        }
    }
    //console.log(memo)
    
    
    let getzo = function(str) {
        let zero = 0, len = str.length
        for(let ch of str) {
            if(ch == '0') {
                zero++
            }
        }
        return [zero, len - zero]
    }
    
    let count = []
    for(let str of strs) {
        count.push(getzo(str))
    }
    
    let dp = function(i, zeroes, ones) {
        
        if(i>= strs.length) {
            return 0
        }
        
        if(memo[i][zeroes][ones] != -1) {
            return memo[i][zeroes][ones]
        }
        
        let max = 0
        let arr = count[i]
        let take = -1
        if(zeroes - arr[0] >= 0 && ones - arr[1] >= 0) {
            take = 1 + dp(i+1, zeroes - arr[0], ones - arr[1])
        }
        let nottake = 0 + dp(i+1, zeroes - 0, ones - 0)
        memo[i][zeroes][ones] = Math.max(take,nottake)
        return memo[i][zeroes][ones]
    }
    
    return dp(0, m, n)
};