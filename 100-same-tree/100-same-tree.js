/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    
    let postorder = (p,q) => {
        if(p && !q) return false
        if(!p && q) return false
        if(!p && !q) return true
        if(p && q) {
            let left = postorder(p.left, q.left)
            let right = postorder(p.right, q.right)
            return (p.val == q.val) && (left ) && (right)
        }
    }
    
    return postorder(p,q)
};