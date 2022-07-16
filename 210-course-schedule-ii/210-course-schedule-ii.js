/**
 * @param {number} n
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(n, prerequisites) {
    let adjList = new Array(n)
    for(let i = 0; i < n; i++) {
        adjList[i] = []
    }
    
    for(let preq of prerequisites) {
        let [a,b] = preq
        adjList[b].push(a) // b->a
    }
    
    const color = {
        white : "0",
        gray : "1",
        black : "2"
    }
    
    let order = []
    let colors = new Array(n)
    colors.fill(color.white)
    
    let ispossible = true
    let dfs = (u) => {
        if(!ispossible) {
            return
        }
        colors[u] = color.gray
        for(let v of adjList[u]) {
            if(colors[v] == color.white) {
                dfs(v)
            } else if(colors[v] == color.gray) {
                ispossible = false
            }
        }
        colors[u] = color.black
        order.push(u)
    }
    
    for(let i = 0; i < n; i++) {
        if(colors[i] == color.white) {
            dfs(i)
            if(ispossible == false) {
                return []
            }
        }
    }
    return order.reverse()
};