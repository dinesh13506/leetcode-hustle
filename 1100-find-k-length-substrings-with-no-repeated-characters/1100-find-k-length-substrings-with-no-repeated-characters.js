/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var numKLenSubstrNoRepeats = function(s, k) {
    let len = s.length, count = 0
    if(k > len) {
        return count
    }
    let map = new Map()
    for(let i = 0; i < k; i++) {
        let c = map.get(s[i]) || 0
        c++
        map.set(s[i],c)
    }
     if(map.size == k) {
            count++
    }
    let right = k
    while(right < len) {
        let r_ch = s[right]
        let l_ch = s[right - k]
        let l_count = map.get(l_ch)
        l_count--
        if(l_count == 0) {
            map.delete(l_ch)
        } else {
            map.set(l_ch,l_count)
        }
        let r_count = map.get(r_ch) || 0
        r_count++
        map.set(r_ch,r_count)
        if(map.size == k) {
            count++
        }
        right++
    }
    return count
};