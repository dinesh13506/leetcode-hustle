/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function(answerKey, k) {
    
    let n = answerKey.length
    
    let getmaxlen = (ch) => {
        let start = 0, end = 0, maxlen = 0
        let freq = new Map()
        for(end = 0;  end < n; end++) {
            let count = freq.get(answerKey[end]) || 0
            count++
            freq.set(answerKey[end], count)
            while(freq.get(ch) > k) {
                let count = freq.get(answerKey[start])
                count--
                freq.set(answerKey[start], count)
                start++
            }
            maxlen = Math.max(maxlen, end - start + 1)
        }
        return maxlen
    }
    
    return Math.max(getmaxlen('T'), getmaxlen('F'))
};