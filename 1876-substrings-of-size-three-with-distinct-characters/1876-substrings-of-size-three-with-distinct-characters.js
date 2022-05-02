/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    
    let length = s.length, map = new Map(), k = 3, ans = 0
    if(length < k) {
        return 0
    }
    for(let i = 0; i < k; i++) {
        let c = map.get(s[i]) || 0
        c++
        map.set(s[i],c)
    }
    if(map.size == k) {
        ans++
    }
    let right = k
    while(right < length) {
        let leftmost = s[right -k]
        let rightmost = s[right]
        let lcount = map.get(leftmost)
        lcount--
        if(lcount == 0) {
            map.delete(leftmost)
        } else {
            map.set(leftmost,lcount)
        }
        let rcount = map.get(rightmost) || 0
        rcount++
        map.set(rightmost, rcount)
        if(map.size == k) {
            ans++
        }
        right++
    }
    return ans
};