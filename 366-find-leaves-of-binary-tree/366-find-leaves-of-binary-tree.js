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
 * @return {number[][]}
 */
var findLeaves = function(root) {
    
    
    let isleaf = (node) => {
        if(node && node.left == null && node.right ==null) {
            return true
        }
        return false
    }
    let preorder = (node,parent,list) => {
        if(node) {
            if(isleaf(node)) {
                if(parent && parent.left == node) {
                    parent.left = null
                } else if(parent && parent.right == node ) {
                    parent.right = null
                }
                list.push(node.val)
            }
            preorder(node.left, node,list)
            preorder(node.right, node, list)
        }
    }
    
    
    
    let dummyNode = new TreeNode(-1)
    dummyNode.left = root
    dummyNode.right = null
    let answer = []
    while(dummyNode.left) {
        let list = []
        preorder(root,dummyNode, list)
        //console.log(list)
        answer.push(list)
    }
    return answer
    
    
};