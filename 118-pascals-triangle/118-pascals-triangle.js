/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let ans = [[1]]
    while(ans.length < numRows) {
        let lastArr = ans[ans.length-1]
        let curr = [1]
        for(let i = 1; i < lastArr.length; i++) {
            curr.push(lastArr[i-1] + lastArr[i])
        }
        curr.push(1)
        ans.push(curr)
    }
    return ans
};