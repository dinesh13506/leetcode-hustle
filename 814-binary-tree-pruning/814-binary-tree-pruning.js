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
 * @return {TreeNode}
 */
var pruneTree = function(root) {
    
    let haveAllZeros = (node) => {
        if(node == null) return false
        let q = new Queue()
        q.enqueue(node)
        while(q.size()) {
            let x = q.dequeue()
            if(x.val == 1) return false
            if(x.left) {
               q.enqueue(x.left) 
            }
            if(x.right) {
               q.enqueue(x.right) 
            }
        }
        return true
    }
    
    let preorder = (node) => {
        if(node) {
            if(haveAllZeros(node.left)) {
                node.left = null
            }
            preorder(node.left)
            if(haveAllZeros(node.right)) {
                node.right = null
            }
            preorder(node.right)
            if(haveAllZeros(node)) {
                node = null
            }
        }
    }
    preorder(root)
    if(haveAllZeros(root)) {
        root = null
    }
    return root
};