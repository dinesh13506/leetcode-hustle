/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
 var kWeakestRows = function(mat, k) {
    let r = mat.length
    let c = mat[0].length
    let arr = new Array(r)
    for(let i = 0; i < r; i++) {
        arr[i] = {
            countOnes : 0,
            rowNo : 0
        }
    }
    for(let i = 0; i < r; i++) {
        arr[i].rowNo = i
        for(let j = 0; j < c; j++) {
            if(mat[i][j] > 0) {
               arr[i].countOnes++
            }
        }
    }
    arr.sort(function(a,b) {
        if(a.countOnes === b.countOnes) {
            return a.rowNo - b.rowNo
        }
        return a.countOnes - b.countOnes
    })
    
    let res = []
    for(let i = 0; i<k;i++) {
        res.push(arr[i].rowNo)
    }
    return res
};