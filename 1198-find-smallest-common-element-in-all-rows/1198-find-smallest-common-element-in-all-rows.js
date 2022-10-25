/**
 * @param {number[][]} mat
 * @return {number}
 */
var smallestCommonElement = function(mat) {
    
    let set = new Set();
    for(let x of mat[0]) {
        if(set.has(x)) continue;
        set.add(x);
    }
    
    for(let i = 1; i < mat.length; i++) {
        let prev = new Set();
        for(let x of mat[i]) {
            if(set.has(x)) {
                prev.add(x);
            }
        }
        set = prev;
    }
    
    return set.size > 0 ? Math.min(...set) : -1;
};