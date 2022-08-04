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
var widthOfBinaryTree = function(root) {
    
    let width = 0
    let queue = new Queue()
    queue.enqueue([root, 0])
    while(queue.size() > 0) {
        let first = queue.front(), last = queue.back()
        let size = queue.size()
        while(size) {
            let node = queue.dequeue()
            size--
            if(node[0].left) {
                queue.enqueue([node[0].left, node[1] * 2 - first[1]])
            }
            if(node[0].right) {
                queue.enqueue([node[0].right, node[1] * 2 + 1 - first[1]])
            }
        }
        width = Math.max(width, last[1] - first[1] + 1)
    }
    return width
        
};