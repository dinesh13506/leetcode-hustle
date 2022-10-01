/**
 * @param {number[]} cells
 * @param {number} n
 * @return {number[]}
 */
var prisonAfterNDays = function(cells, n) {
    let seen = new Map()
    while(n > 0) {
        let state = cells.join('')
        seen.set(state, n)
        let copy = cells.slice()
        copy[0] = 0
        copy[7] = 0
        for(let i = 1; i < 7; i++) {
            copy[i] = cells[i-1] == cells[i+1] ? 1 : 0
        }
        cells = copy
        n--
        state = cells.join('')
        if(seen.has(state)) {
            n = n % (seen.get(state) - n)
        }
    }
    return cells
    
};