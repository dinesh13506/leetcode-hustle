class Node {
    constructor(key,value) {
        this.key = key
        this.value = value
        this.prev = null
        this.next = null
    }
}



/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.size = 0
    this.cache = new Map()
    this.capacity = capacity
    this.head = new Node()
    this.tail = new Node()
    this.head.next = this.tail
    this.tail.prev = this.head
    
    this.addNode = function(node) {
        node.prev = this.head
        node.next = this.head.next
        
        this.head.next.prev = node
        this.head.next = node
    }
    
    this.removeNode = function(node) {
        node.next.prev = node.prev
        node.prev.next = node.next
    }
    
    this.moveToHead = function(node) {
        this.removeNode(node)
        this.addNode(node)
    }
    
    this.popTail = function(node) {
        let prev = this.tail.prev
        this.removeNode(prev)
        return prev
    }
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let node = this.cache.get(key)
    if(!node) {
        return -1
    }
    this.moveToHead(node)
    return node.value
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let node = this.cache.get(key)
    if(!node) {
        let node = new Node(key,value)
        this.cache.set(key, node)
        this.addNode(node)
        this.size++
        if(this.size > this.capacity) {
            let tail = this.popTail()
            this.size--
            this.cache.delete(tail.key)
        }
    } else {
        node.value = value
        this.cache.set(key,node)
        this.moveToHead(node)
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */