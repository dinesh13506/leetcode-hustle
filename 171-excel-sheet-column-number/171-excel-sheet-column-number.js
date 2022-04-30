/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    
    let map = new Map()
    for(let i = 0; i < 26; i++) {
        let asc = i + 65
        let ch = String.fromCharCode(asc)
        map.set(ch,i+1)
    }
    //console.log(map)
    let n = columnTitle.length, ans = 0
    for(let i = 0; i < n; i++) {
        let asc = map.get(columnTitle[n-1-i]) * Math.pow(26,i)
        ans = ans + asc
    }
    return ans
};