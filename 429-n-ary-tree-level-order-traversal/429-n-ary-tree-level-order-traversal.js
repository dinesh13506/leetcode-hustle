/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let answer = []
    if(root == null) {
        return answer
    }
    let queue = new Queue()
    queue.enqueue(root)
    while(queue.isEmpty() == false) {
        let size = queue.size()
        let level = []
        for(let i = 0; i < size; i++) {
            let node = queue.dequeue()
            level.push(node.val)
            for(let child of node.children) {
                queue.enqueue(child)
            }
        }
        answer.push(level)
    }
    return answer
};