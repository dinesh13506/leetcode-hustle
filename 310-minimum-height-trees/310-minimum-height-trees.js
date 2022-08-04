/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
    let leaves = []
    if(n < 2) {
        for(let root = 0; root < n; root++) {
            leaves.push(root)
        }
        return leaves
    }
    
    let adjList = new Array(n)
    adjList.fill(null)
    for(let edge of edges) {
        let [u,v] = edge
        if(adjList[u] == null) {
            adjList[u] = new Set()
        }
        if(adjList[v] == null) {
            adjList[v] = new Set()
        }
        
        adjList[u].add(v)
        adjList[v].add(u) 
    }
    //console.log(adjList)
    let queue = new Queue()
    for(let i = 0; i < n; i++) {
        if(adjList[i].size == 1) {
            queue.enqueue(i)
        }
    }
    let remaining = n
    while(remaining> 2) {
        let temp = new Queue()
        remaining = remaining - queue.size()
        while(queue.size()) {
            let leave = queue.dequeue()
            let parent = Array.from(adjList[leave])[0]
            adjList[parent].delete(leave)
            if(adjList[parent].size == 1) {
                temp.enqueue(parent)
            }
        }
        queue = temp
    }
    //console.log(queue._elements)
    return queue._elements
};