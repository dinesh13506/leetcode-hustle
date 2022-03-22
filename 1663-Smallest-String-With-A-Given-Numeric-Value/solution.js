/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
 var getSmallestString = function(n, sum) {
    
    let result = new Array()
    let numericToChar = new Map()
    for(let i = 1; i <= 26; i++) {
        let ch = String.fromCharCode(i - 1 + 97)
        numericToChar.set(i,ch)
    }
    for(let i = 26; i>=1; i--) {
        //can i take it?
        if( i <= sum ) {
            let iChars = 0
            let tempSum = sum
            while(tempSum > 0) {
                //if i take char at i and sum becomes less than length remaining
                if(tempSum - i < n - iChars - 1) {
                    break
                }
                result.push(numericToChar.get(i))
                iChars++
                tempSum = tempSum - i
            }
            sum = tempSum
            n = n - iChars
        }
        if(sum == 0 && n == 0) break
    } 
    return result.reverse().join("")
};