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
 var invertTree = function(root) {
    
    preorder(root)
    return root
};

let preorder = function(root) {
    if(root) {
        let left = root.left
        let right = root.right
        
        let temp = root.left
        root.left = root.right
        root.right = temp
        preorder(root.left)
        preorder(root.right)
    }
}