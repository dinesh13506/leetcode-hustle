/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function(s) {
   
    let frequency = new Array(26)
    frequency.fill(0)
    
    for(let ch of s) {
        let index = ch.charCodeAt() - 'a'.charCodeAt()
        frequency[index]++
    }
    
    frequency.sort((a,b) => {
        if(a < b) {
            return -1
        } else if(a > b) {
            return 1
        }
        return 0
    })
    let maxAllowedFreq = s.length
    let deletions = 0
    for(let i = 25; i >= 0; i--) {
        if(frequency[i] == 0) {
            break
        }
        if(frequency[i] > maxAllowedFreq) {
            deletions = deletions + (frequency[i] - maxAllowedFreq)
            frequency[i] = maxAllowedFreq
        }
        maxAllowedFreq = Math.max(0, frequency[i] - 1)
    }
    return deletions
};