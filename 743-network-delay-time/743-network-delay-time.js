/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    
    let adjacencyList = new Map()
    for(let time of times) {
        let u = time[0] - 1, v = time[1] - 1, wt = time[2] //convert verticies to 0 based
        if(adjacencyList.has(u) === false) {
            adjacencyList.set(u,new Map())
        }
        adjacencyList.get(u).set(v,wt)
    }
    
    let dist = new Array(n)
    dist.fill(Infinity)
    dist[k-1] = 0
    let set = new Set()
    //select a vertex with min distance and which has not been chosen previously
    let selectNextVertex = function() {
        let index = -1, min = Infinity
        for(let i = 0; i < n; i++) {
            if(dist[i] <= min && set.has(i) === false) {
                min = dist[i]
                index = i
            }
        }
        return index
    }
    
    for(let count = 0; count < n; count++) {
            let u = selectNextVertex()
            set.add(u) //mark as chosen
            if(adjacencyList.has(u)) {
                for(let v of adjacencyList.get(u).keys()) {
                    let wt = adjacencyList.get(u).get(v)
                    if(set.has(v) === false && dist[u] != Infinity && dist[v] > dist[u] + wt) {
                        dist[v] = dist[u] + wt
                    }
                }
            } 
    }
    let max = -Infinity
    for(let d of dist) {
        if(d > max) {
            max = d
        }
    }
    return max === Infinity ? -1 : max
    
};