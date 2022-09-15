/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
    
    const [x1, y1, x3, y3] = rec1
    const [x2, y2, x4, y4] = rec2
    
    let dw = Math.min(x3, x4) - Math.max(x1, x2)
    let dh = Math.min(y3, y4) - Math.max(y1, y2)
    
    if(dw > 0 && dh > 0) return true
    return false
};