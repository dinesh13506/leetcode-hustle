/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    
    //step1. build a graph
    let adjacencyList = new Map()
    for(let i = 0 ; i < equations.length; i++) {
        let src = equations[i][0], dest = equations[i][1]
        if(adjacencyList.has(src) === false) {
            adjacencyList.set(src, new Map())
        }
        if(adjacencyList.has(dest) === false) {
            adjacencyList.set(dest, new Map())
        }
        adjacencyList.get(src).set(dest,values[i])
        adjacencyList.get(dest).set(src,1/values[i])
    }
    
    //console.log(adjacencyList)
    
    let result = new Array(queries.length)
    for(let i = 0; i < queries.length; i++) {
        let src = queries[i][0]
        let dest = queries[i][1]
        if(adjacencyList.has(src) === false || adjacencyList.has(dest) === false) {
            result[i] = -1.0
        } else if(src == dest) {
            result[i] = 1.0
        } else {
            //use dfs to find path between src and dest
            let visited = new Set(), product = 1
            let dfsUtil = function(curr,target,product) {
                visited.add(curr)
                let ans = -1.0
                let neighbours = adjacencyList.get(curr)
                if(neighbours.has(target)) {
                    ans = product * neighbours.get(target)
                } else {
                    for(let neigh of neighbours.keys()) {
                        if(visited.has(neigh)) {
                            continue
                        }
                        ans = dfsUtil(neigh, target,product * neighbours.get(neigh))
                        if(ans != -1.0) {
                            break
                        }
                    }
                }
                visited.delete(curr)
                return ans
            }
            result[i] = dfsUtil(src,dest,product)
            
        }
    }
    return result
};