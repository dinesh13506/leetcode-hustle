/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function(tokens, power) {
    let score = 0, max = 0
    const n = tokens.length
    let i = 0, j = n-1
    tokens.sort((a,b) => {
        return a - b
    })
    
    while(i <= j) {
        if(power >= tokens[i]) {
            score++
            power = power - tokens[i]
            i++
        }
        else if(score >= 1) {
            score--
            power = power + tokens[j]
            j--
        } else {
            break
        }
        if(score > max) max = score
    }
    return max
    
};