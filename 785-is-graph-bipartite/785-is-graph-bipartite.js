/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    let V = graph.length
    let color = new Array(V)
    color.fill(-1)
    
    for(let s = 0; s < V; s++) {
        if(color[s] == -1) {
            color[s] = 1
            let stack = new Array()
            stack.push(s)
            while(stack.length > 0) {
                let u = stack.pop()
                for(let v of graph[u]) {
                    if(color[v] == -1) {
                        color[v] = 1 - color[u]
                        stack.push(v)
                    } else if(color[u] == color[v]) {
                        return false
                    }
                }
            }
        }
    }
    return true
};