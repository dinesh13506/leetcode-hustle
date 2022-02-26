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
 var maxLevelSum = function(root) {
    let max = Number.MIN_SAFE_INTEGER
    let i = 1
    let level = -1
    let q = new queue()
    q.enq(root)
    while(q.size() > 0 ) {
        let n = q.size()
        let sum = 0
        for( let i = 0; i < n; i++) {
            let front = q.getFront()
            q.deq()
            if(front.data.left) {
                q.enq(front.data.left)
            }
            if(front.data.right) {
                q.enq(front.data.right)
            }
            sum += front.data.val
        }
        if( sum > max) {
            level = i
            max = sum
        }
        i++
    }
    
    return level
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