/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
    
    pairs.sort(function(p1,p2) { return p1[0] - p2[0]})
    let lis = new Array(pairs.length)
    lis[0] = 1
    let ans = 1
    for(let i =1; i < pairs.length; i++) {
        lis[i] = 1
        for(j = 0; j < i; j++) {
            if(pairs[j][1] < pairs[i][0]) {
                lis[i] = Math.max(lis[i],lis[j] + 1)
            }
        }
        ans = Math.max(lis[i],ans)
    }
    return ans
};