/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    
    let s = [], g = []
    let bulls = 0, cows = 0
    for(let i = 0; i < secret.length; i++) {
        if(secret[i] == guess[i]) {
            bulls++
        } else {
            s.push(secret[i])
            g.push(guess[i])
        }
    }
    
    let map = new Map()
    for(let ch of s) {
        let count = map.get(ch) | 0
        count++
        map.set(ch, count)
    }
    for(let ch of g) {
        if(map.has(ch) && map.get(ch) > 0) {
            cows++
            map.set(ch, map.get(ch) - 1)
        }
    }
    
    return `${bulls}A${cows}B`
};