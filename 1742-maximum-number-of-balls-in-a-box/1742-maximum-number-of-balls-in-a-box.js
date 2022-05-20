/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function(lowLimit, highLimit) {
    
    let map = new Map()
    for(let num = lowLimit; num <= highLimit; num++) {
        let x = num, sum = 0
        while(x > 0) {
            sum = sum + (x%10)
            x = parseInt(x/10)
        }
        map.set(sum, 1 + (map.get(sum) || 0))
    }
    //console.log(map)
    let max = 0
    for(let box of map.keys()) {
        if(map.get(box) > max) {
            max = map.get(box)
        }
    }
    return max
};