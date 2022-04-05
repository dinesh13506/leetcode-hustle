/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function(aliceSizes, bobSizes) {
    
    let Sa = 0, Sb = 0
    let setb = new Set()
    for(let a of aliceSizes) Sa += a
    for(let b of bobSizes)  {
         setb.add(b)
         Sb += b
    }
       
    let delta = (Sb-Sa)/2
    for(let a of aliceSizes) {
        let b = delta + a
        if(setb.has(b)) {
            return [a,b]
        }
    }
 
    
};