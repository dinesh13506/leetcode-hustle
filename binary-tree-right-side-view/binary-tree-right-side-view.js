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
var rightSideView = function(root) {
    
    let rightview = []
    if( root == null ) {
        return rightview
    }
    
    let q = new queue()
    q.enque(root)
    
    while( q.size() > 0 ) {
        
        let n = q.size()
        for( let i =0; i < n; i++) {
            let front = q.getFront()
            q.deque()
            if(i == 0 ) {
                rightview.push(front.val)
            }
            
            if(front.right) {
                q.enque(front.right)
            }
            if( front.left) {
                q.enque(front.left)
            }
        }
    }
    
    return rightview
};


class node {
    constructor( treenode) {
        this.data = treenode
        this.next = null
    }
}

class queue {
    constructor() {
        this.front = null
        this.rear = null 
        this.length  = 0
    }
    
    size = () => {
        return this.length
    }
    
    enque = ( treenode )  => {
        
        let new_node = new node(treenode)
        if( this.size() == 0) {
            this.front = new_node
            this.rear = new_node
        }
        else {
            this.rear.next = new_node
            this.rear = new_node
        }
        this.length++
    }
    
    getFront = () => {
        return this.front.data
    }
    
    deque = () => {
        if( this.size() == 1) {
            this.front = null
            this.rear = null
        }
        else {
            this.front = this.front.next
        }
        this.length--
    }
}