/**
 * @param {number} n
 * @param {number[][]} reservedSeats
 * @return {number}
 */
var maxNumberOfFamilies = function(n, reservedSeats) {
    let map = new Map()
    for(let rs of reservedSeats) {
        let [row, col] = rs
        if(map.has(row)) {
            let vector = map.get(row) | (1 << col)
            map.set(row, vector)
        } else {
            let vector = (1 << col)
            map.set(row, vector)
        }
    }
    //console.log(map)
    let ans = (n - map.size) * 2
    for(let row of map.keys()) {
        let cnt = 0
        let vector = map.get(row)
        if( (vector & 60) == 0) {
            cnt = cnt + 1
        }
        if( (vector & 960) == 0) {
            cnt = cnt + 1
        }
        if((vector & 240) == 0  && cnt == 0) {
            cnt = cnt + 1
        }
        ans += cnt
    }
    return ans
};