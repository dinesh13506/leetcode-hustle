/**
 * @param {string} p
 * @return {number}
 */
var findSubstringInWraproundString = function(p) {
    
    let count = new Array(26)
    count.fill(0)
    
    let maxLen = 0
    for(let i = 0 ; i < p.length; i++) {
        let currCh = p[i]
        if(i > 0) {
            let prevCh = p[i-1]
            let diff = currCh.charCodeAt() - prevCh.charCodeAt()
            //a ---- z or z----a
            if(diff == 1 || diff == -25) {
                maxLen++
            } else {
                maxLen = 1
            }
        } else{
            maxLen = 1
        }
        let index = currCh.charCodeAt() - 'a'.charCodeAt()
        count[index] = Math.max(maxLen, count[index])
    }
    
    //console.log(count)
    let sum = 0
    for(let c of count) {
        sum = sum + c
    }
    return sum
};