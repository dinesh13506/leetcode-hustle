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

class Node {
    constructor(treeNode) {
        this.data = treeNode
        this.next = null
    }
}

class MyQueue {
    constructor() {
        this.front = null
        this.rear = null
    }
    
    isEmpty() {
        return this.front == null && this.rear == null ? true : false
    }
    
    enque(tnode) {
        let node = new Node(tnode)
        if(this.isEmpty()) {
            this.front = node
            this.rear = node
        } else {
            this.rear.next = node
            this.rear = this.rear.next
        }
    }
    
    deque() {
        if(this.isEmpty()) {
            return 
        } 
        let node = this.front
        if(this.front == this.rear) {
            this.front = null
            this.rear = null
        } else {
            this.front = this.front.next
        }
        return node
    }
    
    peekLast() {
        if(this.isEmpty()) {
            return 
        }
        return this.rear
    }
}
var rightSideView = function(root) {
    let ans = []
    if(!root) {
        return ans
    }
    let q = new MyQueue()
    q.enque(root)
    while(q.isEmpty() == false) {
        //console.log(q.peekLast().data.val)
        ans.push(q.peekLast().data.val)
        let tempq = new MyQueue()
        while(q.isEmpty() == false) {
            let node = q.deque().data
            if(node.left) {
                tempq.enque(node.left)
            }
            if(node.right) {
                tempq.enque(node.right)
            }
        }
        q = tempq
    }
    return ans
};