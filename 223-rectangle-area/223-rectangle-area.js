/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
var computeArea = function(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
    
    let xarr = [ax1, ax2,bx1, bx2]
    let yarr = [ay1, ay2, by1, by2]
    xarr.sort((a,b) =>  { return a - b } )
    yarr.sort((a,b) =>  { return a - b } )
    
    let sum = Math.abs(ax2-ax1) * Math.abs(ay2 - ay1)
    sum += Math.abs(bx2-bx1) * Math.abs(by2 - by1)
    
    let common = 0
    
    let w = Math.min(ax2, bx2) - Math.max(ax1, bx1)
    let h = Math.min(ay2, by2) - Math.max(ay1, by1)
    if(w > 0 && h > 0) {
        sum -= w*h
    }
    return sum
    
};