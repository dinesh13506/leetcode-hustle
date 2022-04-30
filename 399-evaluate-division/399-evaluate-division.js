/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    try {
    let adjacencyMap = {}
    let length = equations.length
    for(let i = 0; i<length;i++) {
        let equation = equations[i]
        let dividend = equation[0]
        let divisor = equation[1]
        let value = values[i]
        if(!adjacencyMap[dividend]) {
            adjacencyMap[dividend] = {}
        }
        if(!adjacencyMap[divisor]) {
            adjacencyMap[divisor] = {}
        }
        adjacencyMap[dividend][divisor] = value
        adjacencyMap[divisor][dividend] = 1 / value
    }
    
    //console.log(adjacencyMap)
    let result = new Array(queries.length)
    for(let i = 0; i < queries.length; i++) {
        let query = queries[i]
        let dividend = query[0]
        let divisor = query[1]
        
        if(!adjacencyMap[dividend] || !adjacencyMap[divisor]) {
            result[i] = -1.0
        } else if(dividend===divisor) {
            result[i] = 1.0
        } else {
            let visited = {}
            let product = 1
            result[i] = dfsutil(dividend,divisor,product,visited,adjacencyMap)
        }
    }
    
    return result
    } catch(e) {
        console.error(e)
    }
    
};

let dfsutil = function(start,end,product,visited,adjacencyMap) {
        let result = -1.0
        visited[start] = true
        let neighbours = adjacencyMap[start]
        if(neighbours[end]) {
            result = product * neighbours[end]
        } else {
            let keys = Object.keys(neighbours)
            for(let neighbour of keys) {
                if(!visited[neighbour]) {
                    result = dfsutil(neighbour,end,product*neighbours[neighbour],visited,adjacencyMap)
                    if(result!= -1) {
                        break
                    }
                }
            }
        }
        //visited[start] = false
        return result
}