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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let arr = []
    let inorder = (node) => {
        if(node == null) {
            return 
        }
        inorder(node.left)
        arr.push(node.val)
        inorder(node.right)
    }
    inorder(root)
    if( k < 0 || k > arr.length) {
        return null
    }
    
    return arr[k-1]
};