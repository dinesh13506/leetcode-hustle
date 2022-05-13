/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    
    if(root == null) {
        return root
    }
    let q = new MyQueue()
    q.enque(root)
    q.enque(null)
    let prevNode = null
    while(!q.isEmpty()) {
        let mynode = q.deque()
        let node = mynode.data
        if(node === null) {
            prevNode = null
            //console.log("level")
            if(!q.isEmpty()) {
                q.enque(null)
            }
        } else {
            //console.log(node.val)
            node.next = prevNode
            prevNode = node
            if(node.right) {
                q.enque(node.right)
            }
            if(node.left) {
                q.enque(node.left)
            }
            
        }
    }
    return root
};


let MyNode = function(node) {
    this.data = node
    this.next = null
}

let MyQueue =  function() {
    this.front = null
    this.rear = null
}

MyQueue.prototype.isEmpty = function() {
    return (this.front === null && this.rear === null)
}

MyQueue.prototype.enque = function(node) {
    let mynode = new MyNode(node)
    if(this.front === null && this.rear === null) {
        this.front = mynode
        this.rear = mynode
    } else {
        this.rear.next = mynode
        this.rear = this.rear.next
    }
}

MyQueue.prototype.deque = function() {
    let mynode = this.front
    if(this.front === this.rear) {
         this.front = null
         this.rear = null
    } else {
         this.front = this.front.next
    }
    return mynode
}
