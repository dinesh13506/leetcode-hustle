/**
 * @param {string} colors
 * @return {boolean}
 */
var winnerOfGame = function(colors) {
    
    let A = 'A', B = 'B'
    let aliceMoves = 0, bobMoves = 0
    let length = colors.length
    for(let i = 1; i <= length - 2; i++) {
        if(colors[i-1] === colors[i] && colors[i] === colors[i+1]) {
            colors[i] === A ? aliceMoves++ : bobMoves++
        }
    }
    return aliceMoves > bobMoves
};