/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val === undefined ? 0 : val;
 *    this.children = children === undefined ? [] : children;
 * };
 */

/**
 * @param {Node|null} node
 * @return {Node|null}
 */
 var cloneTree = function(root) {
    
    if(root == null) {
        return root
    }
    
    let new_root = new Node(root.val)
    let q = new queue()
    let cloneq = new queue()
    q.enq(root)
    cloneq.enq(new_root)
    
    while(q.size()>0) {
        let n = q.size()
        for( let i = 0; i < n; i++) {
            let front = q.getfront()
            let tnode = front.data
            q.deq()
            let children = tnode.children
            let new_children = []
            for(let child of children) {
                q.enq(child)
                let new_child = new Node(child.val,null)
                new_children.push(new_child)
            }
            
            let tclonenode = cloneq.getfront()
            cloneq.deq()
            tclonenode.data.children = new_children
            for(let child of new_children) {
                cloneq.enq(child)
            }
        }
    }
    
    return new_root
    
    
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
    
    size() {
        return this.length
    }
    
    enq(tree_node) {
        let new_node= new node(tree_node)
        if(this.size()<=0) {
            this.front = new_node
            this.rear = new_node
        } else {
            this.rear.next = new_node
            this.rear = new_node
        }
        this.length++
    }
    
    deq() {
        if(this.size()<=1) {
            this.front = null
            this.rear = null
        }
        else {
            this.front = this.front.next
        }
        this.length--
    }
    
    getfront() {
        return this.front
    }
}