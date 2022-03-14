/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
 var findJudge = function(n, trust) {
    
    let inDegree = new Array(n+1).fill(0)
    let outDegree = new Array(n+1).fill(0)
    for( let t of trust) {
        let a = t[0]
        let b = t[1]
        //a -> b
        inDegree[b]++
        outDegree[a]++
    }
    
    //console.log(inDegree,outDegree)
    
    let ans = -1
    for( let i = 1; i <=n; i++) {
        if(inDegree[i] === n - 1 && outDegree[i] === 0) {
            ans = i
            break
        }
    }
    
    return ans
    
};