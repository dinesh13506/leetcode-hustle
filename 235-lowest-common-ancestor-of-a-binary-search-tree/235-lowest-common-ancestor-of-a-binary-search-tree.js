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
        //both p and q are on left side of root
        if(root.val - p.val > 0 && root.val - q.val > 0) {
            root = root.left
        }
        //both p and q are on right side of root
        else if(p.val - root.val > 0 && q.val - root.val > 0) {
            root = root.right
        }
        else {
            break
        }
    }
    return root
};