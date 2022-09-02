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
var averageOfLevels = function(root) {
    
    let answer = []
    if(root == null) return answer
    let queue = new Queue()
    queue.enqueue(root)
    while(!queue.isEmpty()) {
        let sum = 0, n = queue.size()
        let temp = new Queue()
        while(!queue.isEmpty()) {
            let node = queue.dequeue()
            sum += node.val
            if(node.left) temp.enqueue(node.left)
            if(node.right) temp.enqueue(node.right)
        }
        answer.push(sum/n)
        queue = temp
    }
    return answer
};