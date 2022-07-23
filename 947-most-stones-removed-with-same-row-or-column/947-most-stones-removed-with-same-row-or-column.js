/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function(stones) {
    
    let n = stones.length
    let adjacencyList = new Array(n)
    for(let i = 0; i < n; i++) {
        adjacencyList[i] = []
    }
    
    
    
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            if(i!= j && (stones[i][0] == stones[j][0] || stones[i][1] == stones[j][1]) ) {
                adjacencyList[i].push(j)
            }
        }
        //console.log(adjacencyList[i])
    }
    //console.log(adjacencyList)
    
    let visited = new Set()
    let dfs = (u) => {
        if(visited.has(u)) {
            return
        }
        visited.add(u)
        let neighbors = adjacencyList[u]
        for(let v of neighbors) {
            dfs(v)
        }
    }
    
    let count = 0
    for(let u = 0; u < n; u++) {
        if(!visited.has(u)) {
            dfs(u)
            count++
        }
    }

    return n - count
};