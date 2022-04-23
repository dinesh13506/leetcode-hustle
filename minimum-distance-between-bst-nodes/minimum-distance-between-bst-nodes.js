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
function minDiffInBST(root) {
    
    
    let stack = new Array()
    let current = root
    let prev = null
    let result = Number.MAX_SAFE_INTEGER
    
    while( current != null || stack.length > 0 ) {
        
        if( current ) {
            stack.push( current )
            current = current.left
        }
        else {
            current = stack.pop()
            if( prev ) {
               result = Math.min( result, current.val - prev.val )
            }
            prev = current
            current = current.right
        }
    }
    return result
};