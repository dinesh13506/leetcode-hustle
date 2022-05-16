/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    
    let m = word1.length
    let n = word2.length
    
    let prev = new Array(n+1)
    prev.fill(0)
    //first row
    for(let j = 0; j <= n; j++) {
        prev[j] = j
    }
    
   
    
    for(let i = 1; i <= m; i++) {
        let curr = new Array(n+1)
        curr.fill(0)
        curr[0] = i
        for(let j = 1; j <=n; j++) {
            if(word1[i-1] === word2[j-1]) {
                curr[j] = 0 + prev[j-1]
            } else {
               curr[j] = 1 + Math.min(prev[j],Math.min(prev[j-1], curr[j-1]))
            }
        }
        prev = curr
    }
    
    return prev[n]
};