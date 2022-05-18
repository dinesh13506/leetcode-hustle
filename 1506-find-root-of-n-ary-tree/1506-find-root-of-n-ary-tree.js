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
    
    let dfsUtil = function(node,parent) {
        //console.log(node.val, parent)
        if(parent) {
            indegree.set(node, indegree.get(node) + 1)
        }
        
        let children = node.children
        for(let child of children) {
            dfsUtil(child, node)
        }
    }
    for(let node of tree) {
        if(indegree.get(node) == 0) {
            dfsUtil(node,null)
        }
    }
    
    //console.log(indegree)
    
    for(let node of indegree.keys()) {
        if(indegree.get(node) === 0) {
            return node
        }
    }
};