/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
var numSmallerByFrequency = function(queries, words) {
    
    let f = function(s) {
        let map = new Map()
        for(let ch of s) {
            let count = map.get(ch) || 0
            count++
            map.set(ch, count)
        }
        for(let i = 0; i < 26; i++) {
            let ch = String.fromCharCode(i + 97)
            if(map.has(ch)) {
                return map.get(ch)
            }
        }
    }
    
    let freq = []
    for(let word of words) {
        freq.push(f(word))
    }
    
    let ans = []
    for(let query of queries) {
        let c = f(query)
        let count = 0
        for(let fr of freq) {
            if(c < fr) {
                count++
            }
        }
        ans.push(count)
    }
    return ans
};