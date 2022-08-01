/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {
    const n = points.length
    let graph = new Array(n)
    for(let i = 0; i < n; i++) {
        graph[i] = new Array()
        graph[i].fill(0)
    }
    
    for(let p1 = 0; p1 < n; p1++) {
        for(let p2 = 0; p2 < n; p2++) {
                let [x1, y1] = points[p1]
                let [x2, y2] = points[p2]
                let distance = Math.abs(x2-x1) + Math.abs(y2-y1)
                graph[p1][p2] = distance
        }
    }
    
    //console.log(adjList)
    
    let key = new Array(n)
    key.fill(Infinity)
    key[0] = 0
    let visited = new Set()
    
    for(let e = 0;  e < n; e++) {
        let u = -1
        for(let i = 0; i < n; i++) {
            if(visited.has(i) == false && (u == -1 || key[i] < key[u])) {
                u = i
            }
        }
        visited.add(u)

        for(let v = 0; v < n; v++) {
            if(visited.has(v) == false && u != v && key[v] > graph[u][v]) {
                key[v] = graph[u][v]
            }
        }
    }
    //console.log(key)
    let sum  = 0 
    for(let k of key) {
        sum += k
    }
    return sum
    
};