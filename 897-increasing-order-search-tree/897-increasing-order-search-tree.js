/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    
    let newRoot = null, p = null
    const inorder = function(root) {
        if(root) {
            inorder(root.left)
            if(newRoot == null) {
                newRoot = new TreeNode(root.val)
                p = newRoot
            } else {
                p.left = null
                p.right = new TreeNode(root.val)
                p = p.right
            }
            inorder(root.right)
        }
    }
    inorder(root)
    return newRoot
};