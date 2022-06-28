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
  
    
    let lca = function(node) {
        if(node == null) {
            return null
        }
        
        if(node.val == p.val || node.val == q.val) {
            return node
        }
        
        let lca_left = lca(node.left)
        let lca_right = lca(node.right)
        
        if(lca_left && lca_right) {
            return node
        }
        else if(lca_left == null) {
            return lca_right
        }
        else return lca_left
    }
    
    return lca(root)
};