/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
 var criticalConnections = function(n, connections) {
    let result = []
    let cycleEdges = new Map()
    let rankList = new Array(n)
    rankList.fill(null)
    let adjacencyList = new Array(n)
    for(let i = 0; i < n; i++) {
        adjacencyList[i] = new Array()
    }
    
    for(let connection of connections) {
        let u = connection[0]
        let v = connection[1]
        //console.log(u,v)
        adjacencyList[u].push(v)
        adjacencyList[v].push(u)
        let minU = Math.min(u,v)
        let maxV = Math.max(u,v)
        let key = `${minU},${maxV}`
        cycleEdges.set(key,false)
    }
    
    //console.log(adjacencyList)
    
    let dfsUtil = function(s,rank) {
        //if node is already been visited
        if(rankList[s] != null) {
            return rankList[s]
        }
        let minRank = rank + 1
        rankList[s] = rank
        let neighbors = adjacencyList[s]
        for(let v of neighbors) {
            if(rankList[v] != null && rankList[v] === rank -1){
                continue
            }
            let recursiveRank = dfsUtil(v,rank+1)
            if(recursiveRank <= rankList[s]) {
                //console.log(` s = ${s},v = ${v}`)
                let minU = Math.min(s,v)
                let maxV = Math.max(s,v)
                let key = `${minU},${maxV}`
                cycleEdges.set(key,true)
            }
            minRank = Math.min(recursiveRank,minRank)
        }
        return minRank
    }
    
    dfsUtil(0,0)
    
    for(let connection of connections) {
        let u = connection[0]
        let v = connection[1]
        let minU = Math.min(u,v)
        let maxV = Math.max(u,v)
        let key = `${minU},${maxV}`
        if(cycleEdges.get(key) === false) {
            result.push(connection)
        }
    }
    return result
};