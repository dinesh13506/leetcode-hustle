/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */
 var calculateTime = function(keyboard, word) {
    
    let map = {}
    for(let i = 0; i < keyboard.length; i++) {
        let ch = keyboard[i]
        map[ch] = i
    }
    
    let totalDistance = 0
    let currIndex = 0
    for(let j = 0; j < word.length; j++) {
        let currChar = word[j]
        let d = Math.abs(map[currChar] - currIndex)
        totalDistance += d
        currIndex = map[currChar]
    }
    return totalDistance
};