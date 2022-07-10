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
    
    if( root == null ) {
        return true
    }
    
    let lh = isBalanced( root.left ) 
    if( lh == false ) {
        return false
    }
    
    let rh = isBalanced( root.right ) 
    if( rh == false ) {
        return false
    }
    
    //console.log(lh,rh)
    let diff = Math.abs(lh-rh)
    if(diff > 1) {
        return false
    }
    else {
        return Math.max(lh,rh) + 1
    }
};