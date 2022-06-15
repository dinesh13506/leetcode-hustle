/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
    
    let n = words.length
    words.sort((w1,w2) => {
        if(w1.length == w2.length) {
            return 0
        }
        else if(w1.length < w2.length) {
            return -1
        } else if(w1.length > w2.length) {
            return 1
        }
    })
    
    let isPredecssor = (w1,w2) => {
        let lenDiff = w2.length - w1.length
        if(lenDiff != 1)  return false
        let mismatch = false
        let i = 0, j = 0
        while( i < w1.length && j < w2.length) {
            if(w1[i] == w2[j]) {
                i++
                j++
            } else {
                if(mismatch) {
                    return false
                }else {
                    mismatch = true
                    j++
                }
            }
        }
        return true
    }
    
    let lis = new Array(n)
    lis.fill(1)
    
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < i; j++) {
            if(isPredecssor(words[j], words[i])) {
                lis[i] = Math.max(lis[i], lis[j] + 1)
            }
        }
    }
    
    let maxLen = 1
    for(let len of lis) {
        maxLen = Math.max(maxLen, len)
    }
    return maxLen
};