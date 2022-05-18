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
    let nodeMap = new Map()
    let set = new Set()
    for(let node of tree) {
        indegree.set(node.val, 0)
    }
    for(let node of tree) {
        nodeMap.set(node.val, node)
        //console.log(node.val, node.children.length)
        if(node.children && node.children.length > 0) {
            
            for(let child of node.children) {
                indegree.set(child.val, (indegree.get(child) || 0) + 1)
                nodeMap.set(child.val, child)
                set.add(child)
            }
        }
    }
    //console.log(indegree,nodeMap)
    for(let nodeval of indegree.keys()) {
        if(indegree.get(nodeval) == 0) {
            return nodeMap.get(nodeval)
        }
    }
    
    
    
    
    
};