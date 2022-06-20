class Node {
    constructor(key) {
        this.key = key
        this.next = null
        this.prev = null
    }
}

/**
 * @param {number} n
 */
var MRUQueue = function(n) {
    
    this.capacity = n
    this.head = new Node()
    this.tail = new Node()
    this.head.next = this.tail
    this.tail.prev = this.head
    
    this.removeNode = function(node) {
        node.prev.next = node.next
        node.next.prev = node.prev
    }
    
    this.moveToTail = function(node) {
        node.prev = this.tail.prev
        this.tail.prev.next = node
        node.next = this.tail
        this.tail.prev = node
    }
    
    for(let i = 1; i <= n; i++) {
        let node = new Node(i)
        this.moveToTail(node)
    } 
};

/** 
 * @param {number} k
 * @return {number}
 */
MRUQueue.prototype.fetch = function(k) {
    
    let node = this.head
    let p = this.head
    let i = 1
    while(i <= k+1) {
        node = p
        p = p.next
        i++
    }
    this.removeNode(node)
    this.moveToTail(node)
    return node.key
};

/** 
 * Your MRUQueue object will be instantiated and called as such:
 * var obj = new MRUQueue(n)
 * var param_1 = obj.fetch(k)
 */