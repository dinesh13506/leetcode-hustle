/**
 * @param {number[][]} mat
 * @return {number}
 */
var smallestCommonElement = function(mat) {
    
    let prevset = new Set()
    let m = mat.length, n = mat[0].length
    for(let j = 0 ; j < n; j++) {
        prevset.add(mat[0][j])
    }
    
    for(let i = 1; i < m; i++) {
        let currset = new Set()
        for(let j = 0; j < n; j++) {
            if(prevset.has(mat[i][j])) {
                currset.add(mat[i][j])
            }
        }
        prevset = currset
    }
    
    let arr = Array.from(prevset)
    //console.log(arr)
    if(arr.length == 0) {
        return -1
    }
    arr.sort(function(a,b) {
        return a - b
    })
    return arr[0]
};