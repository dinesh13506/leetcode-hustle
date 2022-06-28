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
    
    while(true) {
        if(p.val - root.val > 0 && q.val - root.val > 0) {
            root = root.right
        }
        
        else if(root.val - p.val > 0 && root.val - q.val > 0) {
            root = root.left
        }
        else {
            break
        }
    }
    return root
};