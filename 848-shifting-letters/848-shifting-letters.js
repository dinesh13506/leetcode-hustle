/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function(s, shifts) {
    
    shifts.reverse()
    //console.log(shifts)
    for(let i = 1; i < shifts.length; i++) {
        shifts[i] = shifts[i-1] + shifts[i]
    }
    //console.log(shifts)
    shifts.reverse()
    let ans = []
    for(let i = 0; i < s.length; i++) {
        let code = s[i].charCodeAt()
        let d = shifts[i]
        let newch = String.fromCharCode(( (code + d - 97) % 26 + 97 ))
        ans.push(newch)
    }
    //console.log(ans)
    return ans.join('')
};