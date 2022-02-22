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
        return null
    }
    let q = new queue()
    q.enq(root)
    while(q.size() > 0 ) {
        let n = q.size()
        let prev = null
        for( let i = 0; i < n; i++) {
            let front = q.getFront()
            q.deq()
            if(i == 0) {
                prev = front.data
            } else {
                prev.next = front.data
                prev = front.data
            }
            if(front.data.left) {
                q.enq(front.data.left)
            }
            if(front.data.right) {
                q.enq(front.data.right)
            }
        }
    }
    return root
};



class node {
    constructor(tree_node) {
        this.data = tree_node
        this.next = null
    }
}
class queue {
    constructor() {
        this.front = null
        this.rear = null
        this.length = 0
    }
    
    size = () => {
        return this.length
    }
    
    enq = (tree_node) => {
        let new_node = new node(tree_node)
        if(this.size() == 0 ) {
            this.front = new_node
            this.rear = new_node
        } else {
            this.rear.next = new_node
            this.rear = new_node
        }
        this.length++
       
    }
    
    deq = () => {
        if( this.size() <= 1) {
            this.front = null
            this.rear = null
        }
        else {
            this.front = this.front.next
        }
        this.length--
    }
    
    getFront = () => {
        return this.front
    }
}