/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */

 var leafSimilar = function(root1, root2) {
    let stack1 = []
    let stack2  = []
    
    stack1.push(root1)
    stack2.push(root2)
    
    while(stack1.length && stack2.length) {
        if(nextLeaf(stack1) != nextLeaf(stack2)) {
            return false
        }
    }
    
    return stack1.length == stack2.length
    
};


let nextLeaf = function( stack ) {
    
    while(true) {
        let tn = stack.pop()
        if(tn.left) {
            stack.push(tn.left)
        }
        if(tn.right) {
            stack.push(tn.right)
        }
        if(!tn.left && !tn.right) {
            return tn.val
        }
    }
}