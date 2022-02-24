/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

 var getTargetCopy = function(original, cloned, target) {
    return preorder_traversal(cloned,target)
};


let preorder_traversal = function(root,target) {
    if(root) {
        if(root.val == target.val) {
            return root
        }
        let left = preorder_traversal(root.left,target)
        if(left) {
            return left
        }
        let right = preorder_traversal(root.right,target)
        if(right) {
            return right
        }
        return null
    }
}