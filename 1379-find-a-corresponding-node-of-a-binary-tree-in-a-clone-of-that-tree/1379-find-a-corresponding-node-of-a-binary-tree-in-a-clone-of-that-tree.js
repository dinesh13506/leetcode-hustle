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
    
    let ans = null
    let preorder = function(orig,clone) {
        if(orig && clone) {
            //console.log(orig.val, clone.val,target)
            if(orig == target) {
                ans = clone
                return
            }
            preorder(orig.left, clone.left)
            if(ans == null) {
                preorder(orig.right, clone.right)
            } else {
                return ans
            }
            
        }
    }
    preorder(original, cloned)
    return ans
};