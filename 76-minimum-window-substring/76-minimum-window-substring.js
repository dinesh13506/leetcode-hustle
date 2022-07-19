/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    
    if(s.length == 0 && t.length == 0) {
        return ""
    }
    let tmap = new Map()
    for(let ch of t) {
        tmap.set(ch, (tmap.get(ch) || 0 ) + 1)
    }
    
    let ans = [-1,0,0]
    let required = tmap.size
    let formed = 0
    let l = 0, r = 0
    let windowMap = new Map()
    while(r < s.length) {
        let ch = s[r]
        windowMap.set(ch, (windowMap.get(ch) || 0) + 1)
        if(tmap.has(ch) && tmap.get(ch) == windowMap.get(ch)) {
            formed++
        }
        
        while(l <= r && formed == required) {
            let ch2 = s[l]
            if(ans[0] == -1 || (r-l+1) < ans[0]) {
                ans[0] = r - l + 1
                ans[1] = l
                ans[2] = r
            }
            windowMap.set(ch2, windowMap.get(ch2) - 1)
            if(tmap.has(ch2) && tmap.get(ch2) > windowMap.get(ch2)) {
                formed--
            }
            l++
        }
        r++
    }
    
    let substr = () => {
        let op = []
        while(ans[1] <= ans[2]) {
            op.push(s[ans[1]])
            ans[1]++
        }
        return op.join('')
    }
    return ans[0] == -1 ? "" : substr()
};