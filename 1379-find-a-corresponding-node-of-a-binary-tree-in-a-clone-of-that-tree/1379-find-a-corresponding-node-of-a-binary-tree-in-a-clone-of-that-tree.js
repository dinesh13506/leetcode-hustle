/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

let Node = function(treeNode) {
    this.data = treeNode
    this.next = null
}

let MyQueue = function() {
    this.front = null
    this.rear = null
}

MyQueue.prototype.isEmpty = function() {
    if(this.front === null && this.rear === null) {
        return true
    }
    return false
}

MyQueue.prototype.enque = function(treeNode) {
    let node = new Node(treeNode)
    if(this.isEmpty()) {
        this.front = node
        this.rear = node
    } else {
        this.rear.next = node
        this.rear = this.rear.next
    }
}

MyQueue.prototype.deque = function() {
    if(this.isEmpty()) {
        return
    }
    let node = this.front
    if(this.front === this.rear) {
        this.front = null
        this.rear = null
    } else {
        this.front = this.front.next
    }
    return node
}
var getTargetCopy = function(original, cloned, target) {
    
    let q = new MyQueue()
    q.enque(original)
    q.enque(cloned)
    while(q.isEmpty() === false) {
        let node_o = q.deque().data
        let node_c = q.deque().data
        if(node_o == target) {
            return node_c
        }
        if(node_o.left && node_c.left) {
            q.enque(node_o.left)
            q.enque(node_c.left)
        }
        if(node_o.right && node_c.right) {
            q.enque(node_o.right)
            q.enque(node_c.right)
        }
    }
};