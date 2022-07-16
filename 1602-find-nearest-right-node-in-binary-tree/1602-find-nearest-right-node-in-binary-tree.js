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
 * @param {TreeNode} u
 * @return {TreeNode}
 */
var findNearestRightNode = function(root, u) {
    
    let queue = new Queue()
    queue.enqueue(root)
    while(queue.isEmpty() == false) {
        let temp = new Queue()
        while(queue.isEmpty() == false) {
            let node = queue.dequeue()
            if(node == u && queue.isEmpty() == true) {
                return null
            }
            if(node == u && queue.isEmpty() == false) {
                return queue.dequeue()
            }
            
            if(node.left) {
                temp.enqueue(node.left)
            }
            if(node.right) {
                temp.enqueue(node.right)
            }
        }
        queue = temp
    }
    return null
};