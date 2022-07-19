/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let arr = [[1]]
    while(arr.length < numRows) {
        let lastArr = arr[arr.length-1]
        let curr = [1]
        for(let i = 1; i < arr.length; i++) {
            curr.push(lastArr[i-1] + lastArr[i])
        }
        curr.push(1)
        arr.push(curr)
    }
    //console.log(arr)
    return arr
};