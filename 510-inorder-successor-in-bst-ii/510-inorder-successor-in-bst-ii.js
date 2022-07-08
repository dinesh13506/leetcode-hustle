/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var inorderSuccessor = function(node) {
    
    if(node.right) {
        let p = node.right
        while(p.left) {
            p = p.left
        }
        return p
    } 
    while(node.parent && node.parent.val < node.val) {
        node = node.parent
    }
    return node.parent
    
};