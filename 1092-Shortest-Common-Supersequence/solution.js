/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
 var shortestCommonSupersequence = function(str1, str2) {
    
    let m = str1.length
    let n = str2.length
    let dp = new Array(m+1)
    for(let i = 0; i<=m; i++) {
        dp[i] = new Array(n+1)
    }
    //if text1 is empty
    for(let j=0; j<=n;j++) {
        dp[0][j] = ""
    }
    //if text2 is empty
    for(let i = 0; i<=m; i++) {
        dp[i][0] =""
    }
    
    for(let i = 0; i <= m; i++) {
        for(let j = 0; j<=n ;j++) {
            dp[i][j] = ""
        }
    }
    
    for(let i = 1; i <= m; i++) {
        for(let j = 1; j<=n ;j++) {
            if(str1[i-1] === str2[j-1]) {
                dp[i][j] =  dp[i-1][j-1] + str1[i-1] 
            } else {
                dp[i][j] = (dp[i-1][j].length > dp[i][j-1].length) ? dp[i-1][j] : dp[i][j-1]
            }
        }
    }
    
    let lcs = dp[m][n]
    //console.log(dp[m][n])
    let i = 0
    let j = 0
    let result = ""
    for(let ch of lcs) {
        while(str1[i] != ch) {
            result += str1[i]
            i++
        }
        while(str2[j] != ch) {
            result += str2[j]
            j++
        }
        result += ch
        i++
        j++
    }
    return result + str1.substring(i) + str2.substring(j)
    
};