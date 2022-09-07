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
 * @return {string}
 */
var tree2str = function(root) {
    
    let output = ""
    let preorder = (node) => {
        if(node) {
            let answer = "" + node.val
            let left = preorder(node.left)
            let right = preorder(node.right)
            if(left == "" && right == "") {
                return answer
            }
            else if(right == "") {
                return answer + "(" + left + ")"
            }
            else if(left == "") {
                return answer + "()" + "(" + right + ")"
            }
            else {
                return answer + "(" + left + ")" + "(" + right + ")"
            }
            
        } else {
            return ""
        }
    }
    return preorder(root)
    
};