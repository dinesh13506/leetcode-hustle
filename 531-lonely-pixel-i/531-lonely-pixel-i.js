/**
 * @param {character[][]} picture
 * @return {number}
 */
var findLonelyPixel = function(picture) {
    
    
    let m = picture.length
    let n = picture[0].length
    let rowCount = new Array(m)
    rowCount.fill(0)
    let colCount = new Array(n)
    colCount.fill(0)
    let ans = 0
    for(let i = 0; i < m; i++) {
        let c= 0 
        for(let j = 0; j < n; j++) {
            if(picture[i][j] == "B") {
                c++
            }
        }
        rowCount[i] = c
    }
    for(let j = 0; j < n; j++) {
        let c = 0
        for(let i = 0; i < m; i++) {
            if(picture[i][j] == "B") {
                c++
            }
        }
        colCount[j] = c
    }
    
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(picture[i][j] == "B" && rowCount[i] == 1 && colCount[j] == 1) {
                ans++
            }
        }
    }
    
    return ans
    
};