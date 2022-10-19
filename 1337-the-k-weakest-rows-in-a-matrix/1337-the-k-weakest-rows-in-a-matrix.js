/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
function strength(mat, k){
    const m = mat.length, n = mat[0].length;
    let strengthMap = new Map();
    function soldiers(r) {
            let row = mat[r];
            const target = 1;
            let low = 0, high = n - 1;
            while(low <= high){
                let mid = low + parseInt( (high - low) / 2 );
                if(row[mid] === target) { 
                    if(row[mid+1] != row[mid])
                        return mid + 1;
                    else { 
                        low = mid + 1;
                    }  
                }
                else if(row[mid] < target){
                    if(row[mid-1] != row[mid])
                        return mid;
                    else
                        high = mid - 1;
                }
            }
            return 0;
    }
    for(let r = 0; r < m; r++) {
        strengthMap.set(r, soldiers(r));
    }
    
    const weakRows = [];
    let rowIdxs = [...strengthMap.keys()];
    rowIdxs.sort((r1, r2) => {
        if(strengthMap.get(r1) < strengthMap.get(r2)) {
            return -1; // r1, r2 , weakest -> strongest
        }
        else if(strengthMap.get(r1) > strengthMap.get(r2)) {
            return 1; // r2, r1 weakest -> strongest
        }
        else if(strengthMap.get(r1)  == strengthMap.get(r2)) {
            if(r1 < r2) {
                return -1;
            } else {
                return 1;
            }
        }
    });
    
    for(let r = 0; r < k; r++) {
        weakRows.push(rowIdxs[r]);
    }
    return weakRows;
}
var kWeakestRows = function(mat, k) {
    return strength(mat,k)
};