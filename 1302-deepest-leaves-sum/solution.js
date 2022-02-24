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
 var deepestLeavesSum = function(root) {
    
    let sum = 0
    let q = new queue()
    q.enq(root)
    while(q.size() > 0 ) {
        let size  = q.size()
        sum = 0
        for( let i = 0; i < size; i++) {
            let front = q.getfront()
            q.deq()
            sum = sum + front.data.val
            let left = front.data.left
            let right = front.data.right
            if(left) {
                q.enq(left)
            }
            if(right) {
                q.enq(right)
            }
        }
    }
    
    return sum
};


class node {
    constructor(tree_node) {
        this.data = tree_node
        this.next = null
    }
}


class queue {
    constructor() {
        this.length = 0
        this.front = null
        this.rear = null
    }
    
    size = () => {
        return this.length
    }
    
    enq = (tree_node) => {
        let new_node = new node(tree_node)
        if(this.size() == 0) {
            this.front = new_node
            this.rear = new_node
        }
        else {
            this.rear.next = new_node
            this.rear = new_node
        }
        this.length++
    }
    
    deq = () => {
        if(this.size <=1) {
            this.front = null
            this.rear = null
        }
        else {
            this.front = this.front.next
        }
        this.length--
    }
    
    getfront = () => {
        return this.front
    }
}