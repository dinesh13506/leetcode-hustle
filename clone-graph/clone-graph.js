/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(root) {
    
    if(root ==null) return root
    let visited = new Map()
    let q = new Myqueue()
    q.enq(root)
    let new_root = new Node(root.val,[])
    visited.set(root,new_root)
    while(q.size() > 0) {
        let node = q.getfront()
        q.deq(node)
        let neighbors = node.neighbors
        for(let neighbor of neighbors) {
            if(visited.has(neighbor)) {
                visited.get(node).neighbors.push(visited.get(neighbor))
            } else {
                let clone_node = new Node(neighbor.val,[])
                visited.set(neighbor,clone_node)
                visited.get(node).neighbors.push(clone_node)
                q.enq(neighbor)
            }
            
        }  
    }
    return visited.get(root)
    
};

class Mynode {
    constructor(value) {
        this.data = value
        this.next = null
    }
}

class Myqueue {
    constructor() {
        this.front = null
        this.rear = null
        this.length = 0
    }
    
    size() {
        return this.length
    }
    
    getfront() {
        return this.front.data
    }
    
    enq(value) {
        let node = new Mynode(value)
        if(this.length<=0) {
            this.front = node
            this.rear = node
        } else {
            this.rear.next = node
            this.rear = this.rear.next
        }
        this.length++
    }
    
    deq() {
        if(this.length<=1) {
            this.front = null
            this.rear = null
        } else {
            this.front = this.front.next
        }
        this.length--
    }
}