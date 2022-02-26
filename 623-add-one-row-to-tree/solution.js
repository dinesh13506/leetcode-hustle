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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
 var addOneRow = function(root, val, depth) {
    let cur_depth = 1
    if(depth == 1) {
        let new_root = new TreeNode(val)
        new_root.left = root
        return new_root
    }
    
    let q = new queue()
    q.enq(root)
    while(q.size() && cur_depth < depth ) {
        let n = q.size()
        for(let i=0; i<n; i++) {
            let front = q.getFront()
            q.deq()
            if(front.data.left) {
                q.enq(front.data.left)
            }
            if(front.data.right) {
                q.enq(front.data.right)
            }
            if(cur_depth == depth-1) {
                let l = new TreeNode(val)
                let r = new TreeNode(val)
                l.left = front.data.left
                r.right = front.data.right
                front.data.left = l
                front.data.right = r
            }
        }
        cur_depth++
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