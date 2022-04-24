/**
 * @param {number[][]} circles
 * @return {number}
 */
var countLatticePoints = function(circles) {
    
    let m = circles.length
    let gethash = function(x,y) {
        return `${x}_${y}`
    }
    let count = 0
    let max_r = 100, max_a = 100, max_b = 100
    for(let x = max_a - max_r; x <= max_a + max_r; x++) {
        for(let y = max_b - max_r; y<= max_b + max_r; y++) {
            for(let c = 0; c < m; c++) {
                let a = circles[c][0]
                let b = circles[c][1]
                let r = circles[c][2]
                let powx = Math.pow(x-a, 2)
                let powy = Math.pow(y-b, 2)
                let powr = Math.pow(r,2)
                if(powx + powy <= powr) {
                    count = count + 1
                    break
                }
            }   
        }
    }
    
    return count
};