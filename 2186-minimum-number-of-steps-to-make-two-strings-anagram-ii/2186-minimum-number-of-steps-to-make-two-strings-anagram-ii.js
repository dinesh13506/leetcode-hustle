/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    let scounter = new Array(26)
    let tcounter = new Array(26)
    scounter.fill(0)
    tcounter.fill(0)
    for(let ch of s){
        let index = ch.charCodeAt() - ('a'.charCodeAt())
        scounter[index]++
    }
    for(let ch of t){
        let index = ch.charCodeAt() - 'a'.charCodeAt()
        tcounter[index]++
    }
    let ans = 0
    for(let i = 0; i< 26; i++) {
        ans = ans + Math.abs(scounter[i] - tcounter[i])
    }
    return ans
};