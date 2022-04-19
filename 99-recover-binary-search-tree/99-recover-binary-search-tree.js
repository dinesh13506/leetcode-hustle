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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    
    let lastNode = new TreeNode(-Infinity), swaps = []
    //morris traversal - threaded tree
    let curr = root
    while(curr != null) {
        //case 1
        if(curr.left == null) {
            if(lastNode.val > curr.val) {
                if(swaps.length == 2) {
                    swaps.pop()
                    swaps.push(curr)
                } else {
                    swaps.push(lastNode)
                    swaps.push(curr)
                }
            }
            
            lastNode = curr
            curr = curr.right
        } else {
            //case 2, move to right most of left subtree
            let prev = curr.left
            while(prev.right != null && prev.right != curr) {
                prev = prev.right
            }
            //visiting left substree for first time
            if(prev.right == null) {
                prev.right = curr //create a link
                curr = curr.left
            } else {
                //already visited
                prev.right = null
                if(lastNode.val > curr.val) {
                    if(swaps.length == 2) {
                        swaps.pop()
                        swaps.push(curr)
                    } else {
                        swaps.push(lastNode)
                        swaps.push(curr)
                    }
                }
                lastNode = curr
                curr = curr.right
            }
        }
    }
    
    let node1 = swaps[0], node2 = swaps[1]
    let temp = node1.val
    node1.val = node2.val
    node2.val = temp
};