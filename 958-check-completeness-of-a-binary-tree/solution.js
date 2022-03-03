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
 var isCompleteTree = function(root) {
    
    let q = new queue()
    q.enque(root)
    
    while(true) {
        let front = q.getfront().data
        q.deque()
        if(front.left == null) {
            if(front.right!=null) {
                return false
            }
            break
        }
        
        q.enque(front.left)
        if(front.right == null) {
            break
        }
        q.enque(front.right)
    }
    
    while(q.size() > 0 ) {
        let front = q.getfront().data
        q.deque()
        if(front.left != null || front.right!= null) {
            return false
        }
    }
    return true
};



class Node {
    constructor(treeNode) {
        this.data = treeNode
        this.next = null
    }
}

class queue {
    constructor() {
        this.front = null
        this.rear = null
        this.length = 0
    }
    
    size() {
        return this.length
    }
    
    enque(treeNode) {
        let node = new Node(treeNode)
        if(this.size() <=0) {
            this.front = node
            this.rear = node
        } else {
            this.rear.next = node
            this.rear = node
        }
        this.length++
    }
    
    deque() {
        if(this.size()<=1) {
            this.front = null
            this.rear = null
        } else {
            this.front = this.front.next
        }
        this.length--
    }
    
    getfront() {
        return this.front
    }
}