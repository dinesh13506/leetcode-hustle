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
class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}
class MyQueue {
    constructor() {
        this.front = null
        this.rear = null
    }
    isEmpty() {
        return (this.front == null) && (this.rear == null)
    }
    
    enque(val) {
        let node = new Node(val)
        if(this.isEmpty()) {
            this.front = node
            this.rear = node
        } else {
            this.rear.next = node
            this.rear = this.rear.next
        }
    }
    
    deque() {
        if(this.isEmpty()) return null
        let node = this.front
        if(this.front == this.rear) {
            this.front = null
            this.rear = null
        } else {
            this.front = this.front.next
        }
        return node
    }
}
var findBottomLeftValue = function(root) {
    if(!root) {
        return levelOrder
    }
    let ans = null
    let queue = new MyQueue()
    queue.enque(root)
    while(!queue.isEmpty()) {
        let tempq = new MyQueue()
        let level = []
        let first = false
        while(!queue.isEmpty()) {
            let node = queue.deque().val
            if(first == false) {
                ans = node.val
                first = true
            }
            if(node.left) {
                tempq.enque(node.left)
            }
            if(node.right) {
                tempq.enque(node.right)
            }
        }
        queue = tempq
    }
    return ans
};