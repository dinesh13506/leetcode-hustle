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
 * @return {number}
 */
let path_sum = Number.MIN_SAFE_INTEGER
var maxPathSum = function(root) {
    path_sum = Number.MIN_SAFE_INTEGER
    pathsum(root)
    return path_sum
};


let pathsum = function(root) {
    if( root == null  ) {
        return 0
    }
    
    let lsum = Math.max(pathsum(root.left) ,0)
    let rsum = Math.max(pathsum(root.right),0)
    path_sum = Math.max(path_sum, root.val + lsum + rsum )
    return root.val + Math.max( lsum , rsum)
}