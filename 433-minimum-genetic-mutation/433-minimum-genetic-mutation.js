/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(start, end, bank) {
    
    const len = start.length
    let adjList = new Map()
    for(let bk of bank) {
        for(let l = 0; l < bk.length; l++) {
            let hash = bk.substring(0, l) + "*" + bk.substring(l+1, len)
            //console.log(hash)
            if(adjList.has(hash) == false) {
                adjList.set(hash, [])
            }
            adjList.get(hash).push(bk)
        }
    }
    //console.log(adjList)
    let visited = new Set()
    let queue = new Queue()
    queue.enqueue([start, 0])
    visited.add(start)
    while(queue.size()) {
        let node = queue.dequeue()
        //console.log(node)
        if(node[0] == end) {
            return node[1]
        }
        for(let l = 0; l < node[0].length; l++) {
            let hash = node[0].substring(0, l) + "*" + node[0].substring(l+1, len)
            for(let neigh of (adjList.get(hash) || [] )) {
                if(visited.has(neigh) == false) {
                    visited.add(neigh)
                    queue.enqueue([neigh, node[1] + 1])
                }
            }
        }
    }
    return -1
};