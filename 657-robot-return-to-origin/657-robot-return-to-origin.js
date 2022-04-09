/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let freqMap = new Map()
    freqMap.set('L',0)
    freqMap.set('R',0)
    freqMap.set('U',0)
    freqMap.set('D',0)
    for(let move of moves) {
       freqMap.set(move, (freqMap.get(move) || 0) + 1) 
    }
    
    return freqMap.get('U') == freqMap.get('D') && freqMap.get('L') == freqMap.get('R')
};