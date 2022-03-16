/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
 var minReorder = function(n, connections) {
   
    let visited = new Array(n)
    visited.fill(false)
    
    let directedAdjList = new Array(n)
    let undirectedAdjList = new Array(n)
    let map = new Map()
    for(let i=0; i<n; i++) {
        directedAdjList[i] = new Set()
        undirectedAdjList[i] = new Array()
    }
    
    for(let connection of connections) {
        let u = connection[0]
        let v = connection[1]
        directedAdjList[u].add(v)
        map.set(u,v)
        undirectedAdjList[u].push(v)
        undirectedAdjList[v].push(u)
    }
    
    //console.log(directedAdjList,undirectedAdjList)
    
    let ans = 0
    let dfsutil = function(s) {
        visited[s] = true
        let neighbours = undirectedAdjList[s]
        for(let v of neighbours) {
            if(visited[v] == false) {
                if(directedAdjList[s].has(v)) {
                    //console.log(`${s} -> ${v} need fixing`)
                    ans++
                }
                dfsutil(v)
            }
        }
    }
    
    dfsutil(0)
    return ans
};