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
 * @return {boolean}
 */
 var isEvenOddTree = function(root) {
    let level = 0
    let q = new queue()
    q.enq(root)
    while(q.size() > 0 ) {
        let n = q.size()
        let prev = null
        if(level%2==0) {
            prev = Number.MIN_SAFE_INTEGER
        } else {
           prev = Number.MAX_SAFE_INTEGER 
        }
        for( let i = 0; i < n; i++) {
            let front = q.getFront()
            q.deq()
            if(level%2==0) {
                if(front.data.val%2 ==0 || prev >= front.data.val) {
                    return false
                }
            }
            else {
                if(front.data.val%2 !=0 || prev <= front.data.val) {
                    return false
                }
            }
            if(front.data.left) {
                q.enq(front.data.left)
            }
            if(front.data.right) {
                q.enq(front.data.right)
            }
            prev = front.data.val
        }
        level++
    }
    
    return true
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