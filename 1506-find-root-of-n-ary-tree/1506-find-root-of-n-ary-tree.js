/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val === undefined ? 0 : val;
 *    this.children = children === undefined ? [] : children;
 * };
 */

/**
 * @param {Node[]} tree
 * @return {Node}
 */
var findRoot = function(tree) {
    
    let indegree = new Map()
    for(let node of tree) {
        indegree.set(node, 0)
    }
    for(let node of tree) {
        for(let child of node.children) {
            indegree.set(child, indegree.get(child) + 1)
        }
    }
    
    //console.log(indegree)
    for(let node of indegree.keys()) {
        if(indegree.get(node) === 0) return node
    }
    
};