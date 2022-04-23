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
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
    
    let diff = Number.MAX_SAFE_INTEGER
    let closest = root.val
    while(root) {
        let d = Math.abs(root.val-target)
        if(d < diff) {
            diff = d
            closest = root.val
        }
        root = root.val < target ? root.right : root.left
    }
    
    return closest
};


