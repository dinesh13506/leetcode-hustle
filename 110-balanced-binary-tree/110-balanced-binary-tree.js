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
 * @return {boolean}
 */
var isBalanced = function(root) {
    
    let postorder = (node) => {
        if(node == null) {
            return [0, true]
        }
        if(node.left == null && node.right == null) {
            return [1, true]
        }
        
        let lh = postorder(node.left)
        let rh = postorder(node.right)
        let h = Math.max(lh[0],rh[0]) + 1
        if(lh[1] == false || rh[1] == false) {
            return [h, false]
        }
        let diff = Math.abs(lh[0] - rh[0])
        if(diff > 1) {
            return [h, false]
        } else {
            return [h, true]
        }
    }
    
    let response = postorder(root)
    return response[1]
};