/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
 var allPathsSourceTarget = function(graph) {
   
    let V = graph.length
    let paths = []
    let path = []
    
    let dfsUtil = function(start,end) {
        path.push(start)
        if(start === end) {
            paths.push(path.slice())
        }
        
        let neighbours = graph[start]
        for(let neighbour of neighbours) {
            dfsUtil(neighbour,end)
        }
        path.pop()
    }
    
    dfsUtil(0,V-1)
    return paths
};