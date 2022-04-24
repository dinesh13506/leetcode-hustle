/**
 * @param {number[][]} circles
 * @return {number}
 */
var countLatticePoints = function(circles) {
    let count = 0
    for(let x = 0; x <=200; x++) {
        for(let y = 0; y<=200; y++) {
            for(let i = 0; i < circles.length; i++) {
                
                let powx = Math.pow(x-circles[i][0] ,2)
                let powy = Math.pow(y-circles[i][1] ,2)
                let powr =  Math.pow(circles[i][2],2)
                if(powx + powy <= powr) {
                    count++
                    break
                }
            }
        }
    }
    return count
};