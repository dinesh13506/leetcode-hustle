/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    
    const n = columnTitle.length
    let ans = 0
    let p = 0
    for(let i =  n-1; i >= 0; i--)  {
        let value = columnTitle[i].charCodeAt() - 'A'.charCodeAt() + 1
        ans = ans + Math.pow(26, p) * value
        p++
    }
    return ans
        
};