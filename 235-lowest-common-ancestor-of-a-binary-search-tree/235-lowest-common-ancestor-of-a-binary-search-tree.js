/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    
    let lca = (node, p, q) => {
        if(node == null) return node
        if(p.val < node.val && q.val < node.val) return lca(node.left, p, q)
        if(p.val > node.val && q.val > node.val) return lca(node.right, p, q)
        return node
    }
    
    return lca(root, p, q) 
};