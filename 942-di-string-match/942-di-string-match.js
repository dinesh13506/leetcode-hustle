/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    
    let n = s.length
    let left = 0, right = n
    let res = []
    for(let i = 0; i < s.length; i++) {
        if(s[i] == 'I') {
            //small to big
            res.push(left)
            left++
        } else {
            //big to small
            res.push(right)
            right--
        }
    }
    let last = s[n-1]
    if(last == 'I') {
        //take bigger
        res.push(Math.max(left,right))
    } else {
        //take smaller
         res.push(Math.min(left,right))
    }
    return res
    
};