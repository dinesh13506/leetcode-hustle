/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
 var minDistance = function(word1, word2) {
    
    let memo = new Array(word1.length+1)
    for(let i = 0; i <= word1.length; i++) {
        memo[i] = new Array(word2.length+1)
    }
    //if word1 is empty
    for(let j=0; j<= word2.length; j++) {
        memo[0][j] = 0
    }
    //if word2 is empty
    for(let i = 0; i<= word1.length; i++) {
        memo[i][0] = 0
    }
    
    for(let i = 1; i <= word1.length; i++) {
        for( let j = 1; j<= word2.length; j++) {
            if(word1[i-1] === word2[j-1]) {
                memo[i][j] = 1 + memo[i-1][j-1]
            } else {
                memo[i][j] = Math.max(memo[i-1][j],memo[i][j-1])
            }
        }
    }
    
    let lcs = memo[word1.length][word2.length]
    //console.log(lcs)
    
    // build word1 from word2
    let deletionsRequired1 = Math.abs(lcs - word1.length)
    let insertionsRequired1 = Math.abs(lcs - word2.length) //transfer not common characters from word2
    let totalOps1 = deletionsRequired1 + insertionsRequired1
    
    //build word2 from word1
     let deletionsRequired2 = Math.abs(lcs - word2.length)
     let insertionsRequired2 = Math.abs(lcs - word1.length) //transfer not common characters from word1
     let totalOps2 = deletionsRequired2 + insertionsRequired2
     
     return Math.min(totalOps1,totalOps2)
    
    
};