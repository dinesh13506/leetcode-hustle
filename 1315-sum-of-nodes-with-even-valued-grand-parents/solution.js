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
 var sumEvenGrandparent = function(root) {
    let sum = 0
    let q = new queue()
    q.enq(root,null,null)
    while(q.size() > 0) {
        let n = q.size()
        for( let i = 0; i < n; i++) {
            let front = q.getfront()
            q.deq()
            //console.log(front)
            let left = front.data.left
            let right = front.data.right
            let parent = front.parent
            let grand_parent = front.grand_parent
            if(grand_parent && grand_parent.data.val % 2 == 0) {
                sum = sum + front.data.val
            }
            
            if(left) {
                q.enq(left,front,parent)
            }
            if(right) {
                q.enq(right,front,parent)
            }
        }
    }
    return sum
};

class node {
    constructor(tree_node,parent,grand_parent) {
        this.data = tree_node
        this.parent = parent
        this.grand_parent = grand_parent
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
    
    enq = (tree_node,parent,grand_parent) => {
        let new_node = new node(tree_node,parent,grand_parent)
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