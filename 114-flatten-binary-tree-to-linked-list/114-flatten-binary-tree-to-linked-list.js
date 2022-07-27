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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    
    let ischild = function(root) {
        if(root && root.left == null && root.right == null) {
            return true
        }
        return false
    }
    let flatenTree = function(root) {
        if(root == null) {
            return root
        }
        if(ischild(root)) {
            return root
        }
        let leftTail = flatenTree(root.left)
        let rightTail = flatenTree(root.right)
        
        if(leftTail) {
            leftTail.right = root.right
            root.right = root.left
            root.left = null
        }
        return rightTail ? rightTail : leftTail
    }
    flatenTree(root)
    
};