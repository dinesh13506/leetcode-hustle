/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
 var makeConnected = function(n, connections) {
    let totalConnections = connections.length
    let sufficient = n - 1
    if(totalConnections < sufficient) {
        return -1
    }
    let adjList = new Array(n)
    for(let i=0; i<n; i++) {
        adjList[i] = new Array()
    }
    let visited = new Array(n)
    visited.fill(false)
    
    for(let connection of connections) {
        let u = connection[0]
        let v = connection[1]
        adjList[u].push(v)
        adjList[v].push(u)
    }
    
    let dfsutil = function(s) {
        visited[s] = true
        let neighbours = adjList[s]
        for( let v of neighbours) {
            if(visited[v] === false) {
                dfsutil(v)
            }
        }
    }
    
    let components = 0
    for(let i=0; i<n; i++) {
        if(visited[i] === false){
            dfsutil(i)
            components++
        }
    }
    let extraRequiredConnections = components - 1
    return extraRequiredConnections
};