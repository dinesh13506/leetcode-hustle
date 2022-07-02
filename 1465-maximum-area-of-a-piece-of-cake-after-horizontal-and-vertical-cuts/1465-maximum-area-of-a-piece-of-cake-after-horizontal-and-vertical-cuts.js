/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
const mod = BigInt(Math.pow(10,9) + 7)
var maxArea = function(h, w, horizontalCuts, verticalCuts) {
    
    
    horizontalCuts.sort((a,b) => {
        return a - b
    })
    
    verticalCuts.sort((a,b) => {
        return a - b
    })
    
    //after horizontal cuts width will be same
    //after horizontal cuts height of each piece might differ
    //after horizontal cuts total pieces will be no of cuts + 1
    
    let pieceHeights = [horizontalCuts[0]]
    for(let cut = 1; cut < horizontalCuts.length; cut++) {
        pieceHeights.push(horizontalCuts[cut] - horizontalCuts[cut-1])
    }
    pieceHeights.push(h - horizontalCuts[horizontalCuts.length-1])
    
    
    //after vertical cuts height will be same
    //after vertical cuts width of each piece might differ
    //after vertical cuts total pieces will be no of cuts + 1
    
    let pieceWidths = [verticalCuts[0]]
    for(let cut = 1; cut < verticalCuts.length; cut++) {
        pieceWidths.push(verticalCuts[cut] - verticalCuts[cut-1])
    }
    pieceWidths.push(w - verticalCuts[verticalCuts.length-1])
    
    
    let maxheight = BigInt(Math.max(...pieceHeights))
    let maxwidth = BigInt(Math.max(...pieceWidths))
    
    return BigInt(maxheight * maxwidth) % mod 
};