/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val === undefined ? 0 : val;
 *    this.children = children === undefined ? [] : children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
var diameter = function(root) {
    
    let maxDia = 0
    let dfs = (node) => {
        if(node == null) {
            return 0
        }
        
        let nodes = []
        for(let child of node.children) {
            nodes.push(dfs(child))
        }
        //console.log(nodes)
        nodes.sort((a,b) => { return b - a})
        let max1 = nodes[0] || 0
        let max2 = nodes[1] || 0
        maxDia = Math.max(max1 + max2, maxDia)
        return 1  + Math.max(max1, max2)
    }
    dfs(root)
    return maxDia
};