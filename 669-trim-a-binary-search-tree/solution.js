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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
 var trimBST = function(root, low, high) {
    return helper(root,low,high)
};


let helper = function(root,low,high) {
    if(root == null) {
        return null
    }
    
    if(root.val < low) {
        return helper(root.right,low,high)
    }
    if(root.val > high) {
        return helper(root.left,low,high)
    }
    
    root.left = helper(root.left,low,high)
    root.right = helper(root.right,low,high)
    return root
}