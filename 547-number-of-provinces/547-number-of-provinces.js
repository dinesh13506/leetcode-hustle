/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    
    let n = isConnected.length
    let adjacencyList = new Array(n)
    for(let i = 0; i < n; i++) {
        adjacencyList[i] = []
    }
    
    for(let r = 0;  r < n; r++) {
        for(let c = 0;  c < n;  c++) {
            if(isConnected[r][c]) {
                adjacencyList[r].push(c)
                adjacencyList[c].push(r)
            }
        }
    }
    
    //console.log(adjacencyList)
    
    let visited = new Set()
    let ans = 0
    
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
    
    for(let i = 0; i < n; i++) {
        if(visited.has(i) == false) {
            ans++
            dfs(i)
        }
    }
    return ans
};