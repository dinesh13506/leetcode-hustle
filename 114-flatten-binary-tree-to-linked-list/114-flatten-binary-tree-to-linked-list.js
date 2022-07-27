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
  
    
    let flattenTree = (node) => {
        if(node == null) {
            return null
        }
        if(node.left == null && node.right == null) {
            return node
        }
        
        let lefttail = flattenTree(node.left)
        let righttail = flattenTree(node.right)
        if(lefttail) {
            lefttail.right = node.right
            node.right = node.left
            node.left = null
        }
        
        return righttail ? righttail : lefttail
    }
    
    flattenTree(root)
};