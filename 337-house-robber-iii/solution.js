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
 var rob = function(root) {
    let pair = postorder(root)
    return Math.max(pair[0],pair[1])
};



let postorder = function(root) {
    if(root) {
        let leftpair = postorder(root.left)
        let rightpair = postorder(root.right)
        
        let withroot = root.val + leftpair[1] + rightpair[1]
        let withoutroot = Math.max(leftpair[0],leftpair[1]) + Math.max(rightpair[0],rightpair[1])
        
        return [withroot,withoutroot]
        
    } else {
        return [0,0]
    }
}