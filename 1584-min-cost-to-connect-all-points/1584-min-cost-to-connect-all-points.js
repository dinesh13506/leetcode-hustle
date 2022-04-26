/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {
    
    let minimumCost = 0
    //step1 build the graph, undirected, weighted and connected
    let V = points.length
    let graph = new Array(V)
    for(let i = 0 ; i < V; i++) {
        graph[i] = new Array(V)
    }
    
    //fill graph matrix with weights
    for(let i = 0; i < V; i++) {
        for(let j = 0; j < V; j++) {
            let point1 = points[i], point2 = points[j]
            let weight = Math.abs(point1[0] - point2[0]) + Math.abs(point1[1] - point2[1])
            graph[i][j] = weight
        }
    }
    
    //prim's greedy algorithm to find MST of V-1 edges
    let mSet = new Array(V) //represents inclusion of vertex in MST if true else exclusion
    mSet.fill(false)
    let keys = new Array(V) //represents edge weights which can be included in MST
    keys.fill(Infinity)
    keys[0] = 0
    //include all V-1 edges for MST
    for(let count = 0; count < V; count++) {
        
        //find a minimum edge weight from keys which can be added to MST
        let u = -1
        for(let i = 0; i < V; i++) {
            if(mSet[i] == false) {
                if(u == -1) {
                    u = i
                } else if(keys[i] < keys[u]) {
                    u = i
                }
            } 
        }
        //add the chosen vertex to mSet
        mSet[u] = true
        minimumCost = minimumCost + keys[u]
        
        //update neighbour keys for u
        for(let i = 0; i < V; i++) {
            //i is connected to u
            if(graph[u][i] !=0 && mSet[i] === false) {
                keys[i] = Math.min(keys[i], graph[u][i])
            }
        }
    }
    return minimumCost
};