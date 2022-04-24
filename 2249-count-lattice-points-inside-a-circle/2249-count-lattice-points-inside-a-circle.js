/**
 * @param {number[][]} circles
 * @return {number}
 */
var countLatticePoints = function(circles) {
    
    let m = circles.length
    let gethash = function(x,y) {
        return `${x}_${y}`
    }
    let set = new Set()
    for(let c = 0; c < m; c++) {
        let a = circles[c][0]
        let b = circles[c][1]
        let r = circles[c][2]
        for(let x = a - r; x <= a + r; x++) {
            for(let y = b -r; y<= b + r; y++) {
                let powx = Math.pow(x-a, 2)
                let powy = Math.pow(y-b, 2)
                let powr = Math.pow(r,2)
                if(powx + powy <= powr) {
                    let hash = gethash(x,y)
                    set.add(hash)
                }
            }
        }
    }
    return set.size
    
    
};