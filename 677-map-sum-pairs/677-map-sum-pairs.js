
class QNode {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class Myqueue {
    constructor() {
        this.front = null
        this.rear = null
    }
    isempty() {
        if(!this.front && !this.rear) return true
        return false
    }
    
    enque(node) {
        let qnode = new QNode(node)
        if(this.isempty()) {
            this.front = qnode
            this.rear = qnode
        } else {
            this.rear.next = qnode
            this.rear = this.rear.next
        }
    }
    
    deque() {
        if(this.isempty()) return
        
        let node = this.front
        if(this.front == this.rear) {
            this.front = null
            this.rear = null
        } else {
            this.front = this.front.next
        }
        return node
    }
}

class Node {
    constructor() {
        this.value = 0
        this.isend = false
        this.children = new Array(26)
        this.children.fill(null)
    }
}

class Trie {
    constructor() {
        this.root = new Node()
    }
}
var MapSum = function() {
    this.trie = new Trie()
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
    
    let curr = this.trie.root
    for(let ch of key) {
        let code = ch.charCodeAt() - 'a'.charCodeAt()
        if(curr.children[code]) {
            curr = curr.children[code]
        } else {
            curr.children[code] = new Node()
            curr = curr.children[code]
        }
    }
    curr.isend = true
    curr.value = val
};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
     let sum = 0
     let curr = this.trie.root
     for(let ch of prefix) {
        let code = ch.charCodeAt() - 'a'.charCodeAt()
        if(curr.children[code]) {
            curr = curr.children[code]
        } else {
           return sum
        }
    }
    
    let q = new Myqueue()
    q.enque(curr)
    while(!q.isempty()) {
        let qnode = q.deque()
        let node = qnode.data
        if(node.isend == true) {
            sum = sum + node.value
        }
        let children = node.children
        for(let child of children) {
            if(child) {
                q.enque(child)
            }
        }
    }
    return sum
};

/** 
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */