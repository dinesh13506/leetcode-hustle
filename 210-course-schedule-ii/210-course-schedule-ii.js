/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    
    let order = []
    let indegree = new Array(numCourses)
    indegree.fill(0)
    
    let adjacencyList = new Array(numCourses)
    for(let i = 0; i < numCourses; i++) {
        adjacencyList[i] = []
    }
    for(let preq of prerequisites) {
        let a = preq[0], b = preq[1]
        // b - > a
        indegree[a] = indegree[a] + 1
        adjacencyList[b].push(a)
    }
    
    let queue = new Queue()
    for(let i = 0; i < numCourses; i++) {
        if(indegree[i] == 0) {
           queue.enqueue(i) 
        }
    }
    
    while(!queue.isEmpty()) {
        let u = queue.dequeue()
        order.push(u)
        for(let v of adjacencyList[u]) {
            indegree[v]--
            if(indegree[v] == 0) {
                queue.enqueue(v)
            }
        }
    }
    
    if(order.length == numCourses) {
        return order
    }
    return []
    
};