/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
var criticalConnections = function(n, connections) {
    
    let visited = new Array(n)
    visited.fill(false)
    let parent = new Array(n)
    parent.fill(null)
    let discoveryTime = new Array(n)
    let mindiscoveryTime = new Array(n)
    mindiscoveryTime.fill(Infinity)
    
    let adjList = new Map()
    for(let [u,v] of connections) {
        if(adjList.has(u) == false) {
            adjList.set(u,[])
        }
        if(adjList.has(v) == false) {
            adjList.set(v,[])
        }
        adjList.get(u).push(v)
        adjList.get(v).push(u)
    }
    
    
    let ans = []
    let time = 0
    
    let dfs = (u) => {
        if(visited[u]) {
            return
        }
        visited[u] = true
        time++
        discoveryTime[u] = time
        mindiscoveryTime[u] = time
        
        for(let v of adjList.get(u)) {
            if(visited[v] == false) {
                parent[v] = u
                dfs(v)
                mindiscoveryTime[u] = Math.min(mindiscoveryTime[u], mindiscoveryTime[v])
                if(discoveryTime[u] < mindiscoveryTime[v]) {
                    ans.push([u,v])
                }
            } else {
                if(parent[u] != v) {
                    mindiscoveryTime[u] = Math.min(mindiscoveryTime[u], mindiscoveryTime[v])
                }
            }
        }
    }
    
    dfs(0)
    return ans
};