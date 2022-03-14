/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
 var findSmallestSetOfVertices = function(n, edges) {
    
 
    let indegree = new Array(n)
    for( let i = 0; i < n; i++) {
        indegree[i]  = 0
    }
    for(let edge of edges) {
        let [u,v] = edge
        indegree[v]++
    }
    let answer = []
    for( let i = 0; i < n; i++) {
        if(indegree[i] === 0 ) {
            answer.push(i)
        }
    }
    return answer
    
};