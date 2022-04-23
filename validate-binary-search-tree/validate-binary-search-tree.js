/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */


function helper( node, min, max){
    if( node == null ) {
        return true
    }
    
    let value = node.val
    
    if( value <= min || value >= max ) {
        return false
    }
    
    return helper( node.left , min , value) && helper( node.right , value , max )
    
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    let min = Number.MIN_SAFE_INTEGER
    let max = Number.MAX_SAFE_INTEGER
    
    return helper( root, min, max )
};