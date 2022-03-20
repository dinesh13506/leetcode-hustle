/**
 * @param {number[]} tops
 * @param {number[]} bottoms
 * @return {number}
 */
 var minDominoRotations = function(tops, bottoms) {
    
    let getrotations = function(value) {
        let topcount = 0
        let bottomcount = 0
        let length = tops.length
        for(let i = 0; i < length; i++) {
            let top = tops[i]
            let bottom = bottoms[i]
            if(top != value && bottom != value) {
                return -1
            } else if(top!= value) {
                //rotation on top is needed
                topcount++
            } else if(bottom != value) {
                bottomcount++
            }
        }
        return Math.min(topcount,bottomcount)
    }
        
    let rotations = getrotations(tops[0])
    if(rotations !== -1 || tops[0] == bottoms[0]) {
        return rotations
    }
    return getrotations(bottoms[0])
};