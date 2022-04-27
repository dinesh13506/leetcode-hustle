/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function(s, pairs) {
    
    let V = s.length, E = pairs.length, smallestString = new Array(V)
    //step1 prepare adjacency list
    let adjacencyList = new Array(V)
    for(let v = 0; v < V; v++) {
        adjacencyList[v] = new Array()
    }
    for(let edge of pairs) {
        let u = edge[0], v = edge[1]
        adjacencyList[u].push(v) // u -> v
        adjacencyList[v].push(u) // v -> u
    }
    
    //2. mark all verticies as not visited initially
    let visited = new Array(V)
    visited.fill(false)
    
    //3. Dfs functiion
    let dfsUtil = function(u,chars,indices) {
        visited[u] = true
        chars.push(s[u])
        indices.push(u)
        for(let v of adjacencyList[u]) {
            if(visited[v] === false) {
               dfsUtil(v,chars,indices) 
            }
        }
    }
    
    //3. get connected components
    for(let u = 0; u < V; u++) {
        //for each connected component
        if(visited[u] == false) {
            let chars = [] // stores chars in connected component
            let indices = [] //store indicies in connected component
            dfsUtil(u,chars,indices)
            chars.sort(function(c1,c2) {
                if(c1.charCodeAt() < c2.charCodeAt()) {
                    return -1
                } else if(c1.charCodeAt()  > c2.charCodeAt()) {
                    return 1
                } else {
                    return 0
                }
            })
            indices.sort(function(i,j) {
                return i - j
            })
            
            for(let i = 0; i < indices.length; i++) {
                smallestString[indices[i]] = chars[i]
            }
        }
    }
    return smallestString.join('')
};