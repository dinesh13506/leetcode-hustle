/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    let op = []
    for(let ch of s) {
        op.push(ch.charCodeAt() - 97 + 1)
    }
    let input = op.join('')
    console.log(input)
    while(k>0) {
        let sum = 0
        for(ch of input) {
            sum = sum + parseInt(ch)
        }
        input = "" + sum
        k--
    }
    return input
};