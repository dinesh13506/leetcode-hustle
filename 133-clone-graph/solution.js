/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
 var cloneGraph = function(node) {
    
    let visited = new Map()
    let dfs = function(start) {
        if(start == null) {
            return start
        }
        if(visited.has(start)) {
            return visited.get(start)
        }
        
        let cloned_node = new Node(start.val,[])
        visited.set(start,cloned_node)
        let neighbors = start.neighbors 
        for( let neighbor of neighbors) {
            cloned_node.neighbors.push(dfs(neighbor))
        }
        return cloned_node
    }
    
    return dfs(node)
};