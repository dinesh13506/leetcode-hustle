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
var pruneTree = function(root) {
     
    let postorder = (node) => {
        if(node) {
           
            let left =  postorder(node.left)
            if(left == 0 && node.left) {
                node.left = null
            }
            let right = postorder(node.right)
            if(right == 0 && node.right) {
                node.right = null
            }
            return Math.max(Math.max(left, right), node.val)
            
        } else {
            return 0
        }
    }
    if(postorder(root) == 0) {
        root = null
    }
    return root
};