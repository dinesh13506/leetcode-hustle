/**
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function(n) {
    /**
    a - 0
    e - 1
    i - 2
    o - 3
    u - 4
    **/
    const mod = 1000000007
    let memo = new Array(n+1)
    for(let len = 0; len <= n; len++) {
        memo[len] = new Array(5)
        memo[len].fill(-1)
    }
    let dp = (length, vowel) => {
        if(length == 0) {
            return 0
        }
        if(length == 1) {
            return 1
        }
        if(memo[length][vowel] != -1) {
            return memo[length][vowel]
        }
        switch(vowel) {
            case 0:
                memo[length][vowel] =  (dp(length - 1 , 1) + dp(length - 1, 2) + dp(length - 1, 4)) % mod
                break
            case 1:
                memo[length][vowel] =  (dp(length - 1, 0) + dp(length - 1, 2)) % mod
                break
            case 2:
                memo[length][vowel] =  (dp(length - 1, 1) + dp(length - 1, 3)) % mod
                break
            case 3:
                memo[length][vowel] =  dp(length - 1, 2) % mod
                break
            case 4:
                memo[length][vowel] =  (dp(length - 1, 2) + dp(length - 1, 3))% mod
                break
        }
        return memo[length][vowel]
    }
    
    
    let result = 0
    for(let v = 0; v < 5; v++) {
        result = (result + dp(n, v)) % mod
    }
    return result
};