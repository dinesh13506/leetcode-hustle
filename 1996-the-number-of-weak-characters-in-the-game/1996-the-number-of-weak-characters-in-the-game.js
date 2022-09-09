/**
 * @param {number[][]} properties
 * @return {number}
 */
var numberOfWeakCharacters = function(properties) {
    properties.sort((p1,p2) => {
        if(p1[0] == p2[0]) {
            return p2[1] - p1[1]
        } else {
            return p1[0] - p2[0]
        }
    })
    
    let maxDefense = 0, ans = 0
    const n = properties.length
    for(let i = n-1; i >= 0; i--) {
        let currDef = properties[i][1]
        if(currDef < maxDefense) {
            ans++
        }
        maxDefense = Math.max(currDef, maxDefense)
    }
    return ans
};