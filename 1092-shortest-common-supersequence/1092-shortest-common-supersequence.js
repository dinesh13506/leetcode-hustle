/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var shortestCommonSupersequence = function(str1, str2) {
    
    let n1 = str1.length, n2 = str2.length
    let dp = new Array(n1+1)
    for(let i = 0; i <= n1; i++) {
        dp[i] = new Array(n2+1)
        dp[i].fill(0)
    }
    for(let i = 1; i <= n1; i++) {
        for(let j = 1; j <= n2; j++) {
            if(str1[i-1] === str2[j-1]) {
                dp[i][j] = 1 + dp[i-1][j-1]
            } else {
                dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1])
            }
        }
    }
    
    let i = n1, j = n2, op = []
    while( i > 0 && j > 0) {
        if(str1[i-1] === str2[j-1]) {
            op.push(str1[i-1])
            i--
            j--
        }
        else if(dp[i-1][j] > dp[i][j-1]) {
            op.push(str1[i-1])
            i--
        } else {
            op.push(str2[j-1])
            j--
        }
    }
    
    while(i > 0 ) {
        op.push(str1[i-1])
        i--
    }
    
    while(j > 0 ) {
        op.push(str2[j-1])
        j--
    }
    
    return op.reverse().join('')
    
};