/**
 * @param {character[][]} picture
 * @return {number}
 */
var findLonelyPixel = function(picture) {
    
    let rmap = new Map()
    let cmap = new Map()
    const m = picture.length, n = picture[0].length
    let count = 0
    for(let r = 0; r < m; r++) {
        for(let c = 0; c < n; c++) {
            if(picture[r][c] == "B")
                rmap.set(r, (rmap.get(r) || 0) + 1)
        }
    }
    
    for(let c = 0; c < n; c++) {
        for(let r = 0; r < m; r++) {
            if(picture[r][c] == "B")
                cmap.set(c, (cmap.get(c) || 0) + 1)
        }
    }
    
    //console.log(rmap, cmap)
    for(let r = 0; r < m; r++) {
        for(let c = 0; c < n; c++) {
            if(picture[r][c] == "B" && rmap.get(r) == 1 && cmap.get(c) == 1) {
                count++
            }
                
        }
    }
    return count
};