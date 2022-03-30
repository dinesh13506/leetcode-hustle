var searchMatrix = function(matrix, target) {
    
    let m = matrix.length
    let n = matrix[0].length
    let start = 0
    let end = (m * n) - 1
    while(start <= end){
        let mid = parseInt((start+end)/2)
        let rowIndex = parseInt(mid/n) //per row has n elements, so mid/n will give rowIndex
        let colIndex =  mid%n //this index will be between  [0,n-1] so %n will make sure that
        let midValue = matrix[rowIndex][colIndex]
        if(midValue === target) {
            return true
        }
        else if(target < midValue) {
            end = mid - 1
        } else {
            start = mid + 1
        }
    }
    return false
};