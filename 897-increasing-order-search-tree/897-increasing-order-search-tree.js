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
    let ans = new TreeNode(0) //dummy node
    let p = ans
    const inorder = function(root) {
        if(root) {
            inorder(root.left)
            root.left = null
            p.right = root
            p = p.right
            inorder(root.right)
        }
    }
    inorder(root)
    return ans.right
};