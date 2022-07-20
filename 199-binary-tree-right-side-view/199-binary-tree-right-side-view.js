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
 * @return {number[]}
 */
var rightSideView = function(root) {
    
    let ans = []
    if(root == null) return ans
    let queue = new Queue()
    queue.enqueue(root)
    while(queue.isEmpty() == false) {
        let temp = new Queue()
        while(queue.isEmpty() == false) {
            let node = queue.dequeue()
            if(queue.isEmpty()) {
                ans.push(node.val)
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
    return ans
    
};