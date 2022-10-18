/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    
    let highestIndexOfOne = (row) => {
        let start = 0;
        let end = row.length - 1;
        let index = -1;
        
        while(start <= end) {
            let mid = start + parseInt((end - start)/2);
            if(row[mid] == 0) {
                end = mid - 1
            } else {
                index = Math.max(index, mid);
                start = mid + 1;
            }
        }
        return index;
    }
    
    const m = mat.length;
    let count = new Array(m);
    for(let r = 0;  r < m; r++) {
        let index = highestIndexOfOne(mat[r]);
        //console.log(index);
        count[r] = [index + 1, r];
        
    }
    
    count.sort((a,b) => {
        if(a[0] == b[0]) {
            return a[1] - b[1];
        }
        return a[0] - b[0];
    })
    //console.log(count)
    let rows = [];
    for(let i = 0; i < k; i++) {
        rows.push(count[i][1]);
    }
    return rows;
};