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
var zigzagLevelOrder = function(root) {
    if(root == null) {
        return []
    }
    let forward = true, answer = []
    let queue = new Queue()
    queue.enqueue(root)
    while(queue.size()) {
        //console.log(queue)
        if(forward) {
            let arr = []
            for(let node of queue.toArray()) {
                arr.push(node.val)
            }
            answer.push(arr)
            forward = false
        } else {
            let arr = []
            for(let node of queue.toArray()) {
                arr.push(node.val)
            }
            answer.push(arr.reverse())
            forward = true
        }
        let nextLevel = new Queue()
        while(queue.size()) {
            let node = queue.dequeue()
            if(node.left) {
               nextLevel.enqueue(node.left) 
            }
            if(node.right) {
                nextLevel.enqueue(node.right) 
            }
        }
        queue = nextLevel
    }
    return answer
};